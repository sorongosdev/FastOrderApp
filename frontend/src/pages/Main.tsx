import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/** Style */
import styles from '../styles/Main';
/** Icons */
import HomeIcon from '@assets/icon_home.svg';
import ListIcon from '@assets/icon_list.svg';
import LikeIcon from '@assets/icon_like.svg';
import MyIcon from '@assets/icon_my.svg';
import CartIcon from '@assets/icon_cart.svg';
/** Components */
import BottomSheet from '../components/BottomSheet';
import NaverMap from '../components/NaverMap';
/** Pages */
import Order from '../pages/Order';
import Likes from '../pages/Likes';
import My from '../pages/My';

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

  const Main = () => (
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
      <NaverMap clientId="sc75mhrq7y"></NaverMap>
      <BottomSheet navigation={navigation} />
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: () => {
            let IconComponent;

            if (route.name === 'Main') {
              IconComponent = HomeIcon;
            } else if (route.name === 'OrderList') {
              IconComponent = ListIcon;
            } else if (route.name === 'Likes') {
              IconComponent = LikeIcon;
            } else {
              IconComponent = MyIcon;
            }

            return (
              <View>
                <IconComponent width={24} height={24} />
              </View>
            );
          },

          tabBarLabelStyle: {
            padding: 0,
            margin: 0,
          },
          tabBarStyle: {
            height: 74,
            paddingBottom: 0,
          },
          tabBarItemStyle: {
            padding: 15,
          },
          headerShown: false,
        })}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{tabBarLabel: '홈'}}
        />
        <Tab.Screen
          name="OrderList"
          component={Order}
          options={{
            tabBarLabel: '주문내역',
          }}
        />
        <Tab.Screen
          name="Likes"
          component={Likes}
          options={{tabBarLabel: '찜'}}
        />
        <Tab.Screen
          name="My"
          component={My}
          options={{tabBarLabel: '마이페이지'}}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
