import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps'; // 인터페이스 import
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '@assets/icon_home.svg';
import ListIcon from '@assets/icon_order_list.svg';
import LikeIcon from '@assets/icon_like.svg';
import MyIcon from '@assets/icon_my.svg';

const Tab = createBottomTabNavigator();

export default function Main({navigation}: NavigationProp): React.JSX.Element {
  const navigateToStore = () => {
    navigation.navigate('Store');
  };

  const MainScreen = () => (
    <View style={styles.wrap}>
      <Text style={styles.text} onPress={navigateToStore}>
        Go to Store Information
      </Text>
    </View>
  );

  const OrderListScreen = () => (
    <View style={styles.container}>
      <Text>주문 목록</Text>
    </View>
  );

  const LikesScreen = () => (
    <View style={styles.container}>
      <Text>찜</Text>
    </View>
  );

  const MyScreen = () => (
    <View style={styles.container}>
      <Text>마이페이지</Text>
    </View>
  );

  return (
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
            IconComponent = MyIcon; // MyIcon으로 변경
          }

          console.log('IconComponent:', IconComponent); // 로그 추가

          return <IconComponent width={24} height={24} />;
        },
      })}>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{tabBarLabel: '홈'}}
      />
      <Tab.Screen
        name="OrderList"
        component={OrderListScreen}
        options={{tabBarLabel: '주문 목록'}}
      />
      <Tab.Screen
        name="Likes"
        component={LikesScreen}
        options={{tabBarLabel: '찜 목록'}}
      />
      <Tab.Screen
        name="My"
        component={MyScreen}
        options={{tabBarLabel: '내 정보'}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
