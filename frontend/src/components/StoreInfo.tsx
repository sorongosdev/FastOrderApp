import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';

/** Consts */
import {BASE_URL} from '../consts/Url';

import styles from '../styles/StoreInfo';
import {NavigationProp} from '../navigation/NavigationProps';

interface Store {
  no: number;
  store_name: string;
  latitude: string;
  longitude: string;
  store_type: string;
}

interface CombinedProp extends NavigationProp {
  storeId: number | null;
}

export default function OrderHistory({
  navigation,
  storeId,
}: CombinedProp): React.JSX.Element {
  const [store, setStore] = useState<Store | null>(null);

  const getStoresByType = async (storeId: number) => {
    try {
      const response = await axios.get(`${BASE_URL}/stores/mini/id/${storeId}`);
      setStore(response.data.store_data);
      console.log(response.data.store_data);
    } catch (error) {
      console.error(`Error during getStores of type ${storeId}:`, error);
    }
  };

  useEffect(() => {
    if (storeId) {
      getStoresByType(storeId);
    }
  }, [storeId]); // storeId가 변경될 때마다 실행

  return (
    <View style={styles.container}>
      {store ? ( // store가 null이 아닐 때만 렌더링
        <>
          <View style={styles.storeNameWrapper}>
            <Text style={styles.storeName}>{store.store_name}</Text>
            <Text style={styles.storeType}>{store.store_type}</Text>
          </View>

          <View style={styles.statusWrapper}>
            <Text style={styles.businessStatus}>영업중</Text>
            <Text style={styles.orderStatus}> • 패스트 오더 가능</Text>
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
        </>
      ) : (
        <Text>Loading...</Text> // 데이터가 로드 중일 때 표시할 내용
      )}
    </View>
  );
}
