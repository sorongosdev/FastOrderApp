import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps';
import axios from 'axios';
/** Style */
import styles from '../styles/Main';
/** Icons */
import CartIcon from '@assets/icon_cart.svg';
import KoreanIcon from '@assets/icon_food_korea.svg';
import JapaneseIcon from '@assets/icon_food_japan.svg';
import ChineseIcon from '@assets/icon_food_china.svg';
import WesternIcon from '@assets/icon_food_western.svg';
import CafeIcon from '@assets/icon_food_cafe.svg';
import EtcIcon from '@assets/icon_food_etc.svg';
/** Components */
import BottomSheet from '../components/BottomSheet';
import NaverMap from '../components/NaverMap';

// 아이콘 매핑 정의
const foodIcons = {
  전체: <EtcIcon />,
  한식: <KoreanIcon />,
  일식: <JapaneseIcon />,
  중식: <ChineseIcon />,
  양식: <WesternIcon />,
  카페: <CafeIcon />,
  기타: <EtcIcon />,
} as const; // as const로 타입을 고정

const BASE_URL = 'http://money.ipdisk.co.kr:58200';

export default function Main({navigation}: NavigationProp): React.JSX.Element {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    null,
  );
  const [stores, setStores] = useState([]); // stores 상태 추가
  const foodTypes = Object.keys(foodIcons) as (keyof typeof foodIcons)[]; // keyof 사용

  const handlePress = async (index: number) => {
    setSelectedButtonIndex(index === selectedButtonIndex ? null : index);

    if (index == 0) {
      await getTotalStores();
    }
  };

  const navigateToShopping = () => {
    navigation.navigate('Shopping');
  };

  const getTotalStores = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/stores`);
      setStores(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error during getStores:', error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBarWrapper}>
          <TextInput style={styles.input} placeholder="검색" />
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
                <View style={styles.iconBox}>{foodIcons[type]}</View>
                <Text style={styles.chipText}>{type}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <NaverMap navigation={navigation} stores={stores} />
      {/* <BottomSheet navigation={navigation} data={stores} /> */}
    </View>
  );
}
