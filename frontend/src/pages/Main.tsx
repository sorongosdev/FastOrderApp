import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps';
/** Style */
import styles from '../styles/Main';
/** Icons */
import CartIcon from '@assets/icon_cart.svg';
/** Components */
import BottomSheet from '../components/BottomSheet';
import NaverMap from '../components/NaverMap';

export default function Main({navigation}: NavigationProp): React.JSX.Element {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    null,
  ); // 선택된 버튼 인덱스
  const foodTypes = ['전체', '한식', '일식', '중식', '양식', '카페'];

  const handlePress = (index: number) => {
    // 선택된 버튼 인덱스 업데이트
    setSelectedButtonIndex(index === selectedButtonIndex ? null : index); // 같은 버튼을 다시 누르면 해제
    console.log('Pressed', index);
  };

  const navigateToShopping = () => {
    navigation.navigate('Shopping');
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
          contentContainerStyle={styles.buttonGroup} // 좌우 패딩 설정
        >
          {foodTypes.map((type, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(index)}
              style={[
                styles.chip,
                {
                  backgroundColor:
                    selectedButtonIndex === index ? '#9A9A9A' : '#E0E0E0',
                },
              ]}>
              <View style={styles.chipContainer}>
                <View style={styles.iconBox}></View>
                <Text style={{fontSize: 14, color: '#3D3D3D'}}>{type}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <NaverMap navigation={navigation}></NaverMap>
      <BottomSheet navigation={navigation} />
    </View>
  );
}
