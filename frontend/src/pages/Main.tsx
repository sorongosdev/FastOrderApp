import React from 'react';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/** Style */
import styles from '../styles/Main';
/** Icons */
import CartIcon from '@assets/icon_cart.svg';
/** Components */
import BottomSheet from '../components/BottomSheet';
import NaverMap from '../components/NaverMap';

const Tab = createBottomTabNavigator();

export default function Main({navigation}: NavigationProp): React.JSX.Element {
  const [selectedButtons, setSelectedButtons] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const foodTypes = ['한식', '일식', '중식', '양식', '카페'];

  const handlePress = (index: number) => {
    const newSelectedButtons = [...selectedButtons];
    newSelectedButtons[index] = !newSelectedButtons[index];
    setSelectedButtons(newSelectedButtons);
    console.log('Pressed', index);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBarWrapper}>
          <TextInput style={styles.input} placeholder="검색" />
          <CartIcon />
        </View>
        <View style={styles.buttonGroup}>
          {foodTypes.map((type, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(index)}
              style={[
                styles.chip,
                {
                  backgroundColor: selectedButtons[index]
                    ? '#9A9A9A'
                    : '#E0E0E0',
                },
              ]}>
              <View style={styles.chipContainer}>
                <View style={styles.iconBox}></View>
                <Text style={{fontSize: 14, color: '#3D3D3D'}}>{type}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <NaverMap navigation={navigation}></NaverMap>
      <BottomSheet navigation={navigation} />
    </View>
  );
}
