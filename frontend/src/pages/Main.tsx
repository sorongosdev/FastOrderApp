import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps';
import axios from 'axios';
/** Consts */
import {BASE_URL} from '../consts/Url';
/** Style */
import styles from '../styles/Main';
/** Icons */
import CartIcon from '@assets/icon_cart.svg';
import KoreanIcon from '@assets/icon_food_korea.svg';
import JapaneseIcon from '@assets/icon_food_japan.svg';
import ChineseIcon from '@assets/icon_food_china.svg';
import WesternIcon from '@assets/icon_food_western.svg';
import CafeIcon from '@assets/icon_food_cafe.svg';
/** Components */
import BottomSheet from '../components/BottomSheet';
import NaverMap from '../components/NaverMap';

// 아이콘 매핑 정의
const foodIcons = {
  전체: null, // 아이콘 없음
  한식: <KoreanIcon width={16} height={16} />,
  일식: <JapaneseIcon width={16} height={16} />,
  중식: <ChineseIcon width={16} height={16} />,
  양식: <WesternIcon width={16} height={16} />,
  카페: <CafeIcon width={16} height={16} />,
  기타: null, // 아이콘 없음
} as const; // as const로 타입을 고정

interface Store {
  no: number;
  store_name: string;
  latitude: string;
  longitude: string;
  store_type: string;
}

export default function Main({navigation}: NavigationProp): React.JSX.Element {
  /** 칩그룹 버튼 상태*/
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    null,
  );
  /** 불러온 store*/
  const [stores, setStores] = useState<Store[]>([]);
  /**  마커 눌렀을 때 선택된 매장 아이디*/
  const [selectedStoreId, setSelectedStoreId] = useState<number | null>(null);
  /** 음식 분류 */
  const foodTypes = Object.keys(foodIcons) as (keyof typeof foodIcons)[];

  // 컴포넌트가 마운트될 때 전체 버튼을 선택하고 매장을 불러옴
  useEffect(() => {
    setSelectedButtonIndex(0); // 전체 버튼 선택
    getTotalStores(); // 매장 불러오기
  }, []);

  const handlePress = async (index: number) => {
    setSelectedButtonIndex(index);

    if (foodTypes[index] === '전체') {
      await getTotalStores(); // 모든 매장으로 업데이트
    } else {
      await getStoresByType(foodTypes[index]); // 선택된 타입으로 매장 가져오기
    }
  };

  const navigateToShopping = () => {
    navigation.navigate('Shopping');
  };

  const getTotalStores = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/stores`);
      setStores(response.data); // 모든 매장 데이터 설정
      console.log('Total Stores:', response.data);
    } catch (error) {
      console.error('Error during getStores:', error);
    }
  };

  const getStoresByType = async (type: string) => {
    try {
      const response = await axios.get(`${BASE_URL}/stores/${type}`);
      setStores(response.data); // 선택된 타입의 매장 데이터 설정
      console.log(`Stores of type ${type}:`, response.data);
    } catch (error) {
      console.error(`Error during getStores of type ${type}:`, error);
    }
  };

  // 매장 필터링
  const filteredStores =
    selectedButtonIndex !== null
      ? foodTypes[selectedButtonIndex] === '전체'
        ? stores
        : stores.filter(
            store => store.store_type === foodTypes[selectedButtonIndex],
          )
      : stores;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBarWrapper}>
          <TextInput
            style={styles.input}
            placeholder="먹고 싶은 메뉴나 가게를 검색해보세요."
          />
          <CartIcon onPress={navigateToShopping} />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.buttonGroup}>
          {foodTypes.map((type, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(index)}
              style={[
                styles.chip,
                {
                  backgroundColor:
                    selectedButtonIndex === index ? '#F55442' : '#2A2A2C',
                },
              ]}>
              <View style={styles.chipContainer}>
                {foodIcons[type] && ( // 아이콘이 있을 때만 렌더링
                  <View style={styles.iconBox}>{foodIcons[type]}</View>
                )}
                <Text style={styles.chipText}>{type}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <NaverMap
        navigation={navigation}
        stores={filteredStores} // 필터링된 매장 전달
        onMarkerPress={setSelectedStoreId}
      />
      <BottomSheet navigation={navigation} storeId={selectedStoreId} />
    </View>
  );
}
