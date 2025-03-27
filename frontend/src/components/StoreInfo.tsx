import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

/** Consts */
import { BASE_URL } from '../consts/Url';
/** Redux */
import { useAppSelector } from '../redux/hooks';

import styles from '../styles/StoreInfo';
import { NavigationProp } from '../navigation/NavigationProps';

interface Store {
  no: number;
  store_name: string;
  latitude: string;
  longitude: string;
  store_type: string;
  store_status: string;
  seating_available: boolean;
}

interface CombinedProp extends NavigationProp {
  storeId: number | null;
}

export default function StoreInfo({
  navigation,
  storeId,
}: CombinedProp): React.JSX.Element {
  const [store, setStore] = useState<Store | null>(null);
  // Redux에서 토큰 가져오기
  const token = useAppSelector(state => state.user.token);

  const navigateToStore = () => {
    if (storeId !== null) {
      navigation.navigate('Store', { storeId });
    } else {
      // null인 경우 처리 (예: 에러 메시지, 이전 화면으로 돌아가기 등)
      console.warn('Store ID is null');
      navigation.goBack();
    }
  };

  const getStoreInfo = async (storeId: number) => {
    try {
      // Redux에서 가져온 토큰 사용
      const url = token 
        ? `${BASE_URL}/stores/mini/id/${storeId}?token=${token}`
        : `${BASE_URL}/stores/mini/id/${storeId}`;
        
      const response = await axios.get(url);
      setStore(response.data.store_data);
    } catch (error) {
      console.error(`Error fetching store info for id ${storeId}:`, error);
    }
  };

  useEffect(() => {
    if (storeId) {
      getStoreInfo(storeId);
    }
  }, [storeId, token]); // token이 변경되었을 때도 다시 fetch

  return (
    <View style={styles.container}>
      {store ? (
        <View>
          <TouchableOpacity
            style={styles.storeNameWrapper}
            onPress={navigateToStore}>
            <Text style={styles.storeName}>{store.store_name}</Text>
            <Text style={styles.storeType}>{store.store_type}</Text>
          </TouchableOpacity>

          <View style={styles.statusWrapper}>
            <Text style={styles.businessStatus}>
              {store.store_status === 'Open' ? '영업중' : '영업전'}
            </Text>
            <Text style={styles.orderStatus}>
              {' '}
              •{' '}
              {store.seating_available
                ? '패스트 오더 가능'
                : '패스트 오더 불가'}
            </Text>
          </View>

          <ScrollView
            horizontal
            contentContainerStyle={styles.imgScrollView}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.menuImg}></View>
            <View style={styles.menuImg}></View>
            <View style={styles.menuImg}></View>
            <View style={styles.menuImg}></View>
          </ScrollView>
        </View>
      ) : (
        <Text>가게 정보 불러오는 중</Text>
      )}
    </View>
  );
}