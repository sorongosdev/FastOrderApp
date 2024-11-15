import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, StatusBar, View} from 'react-native';
/** Pages */
import Main from '../pages/Main';
import Order from '../pages/Order';
import Likes from '../pages/Likes';
import My from '../pages/My';
/** Icons */
import HomeActiveIcon from '@assets/icon_active_home.svg';
import HomeEmptyIcon from '@assets/icon_empty_home.svg';
import ListActiveIcon from '@assets/icon_list_active.svg';
import ListEmptyIcon from '@assets/icon_list_empty.svg';
import LikeActiveIcon from '@assets/icon_like_active.svg';
import LikeEmptyIcon from '@assets/icon_like_empty.svg';
import MyActiveIcon from '@assets/icon_my_active.svg';
import MyEmptyIcon from '@assets/icon_my_empty.svg';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const activeColor = '#515151';
  const inactiveColor = '#A2A2A2';

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let IconComponent;
            // let iconColor = focused ? activeColor : inactiveColor; // 공통 색상 사용

            if (route.name === 'Main') {
              IconComponent = focused ? HomeActiveIcon : HomeEmptyIcon;
            } else if (route.name === 'OrderList') {
              IconComponent = focused ? ListActiveIcon : ListEmptyIcon;
            } else if (route.name === 'Likes') {
              IconComponent = focused ? LikeActiveIcon : LikeEmptyIcon;
            } else {
              IconComponent = focused ? MyActiveIcon : MyEmptyIcon;
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
          tabBarActiveTintColor: activeColor, // 공통 액티브 색상
          tabBarInactiveTintColor: inactiveColor, // 공통 비활성 색상
        })}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{tabBarLabel: '홈'}}
        />
        <Tab.Screen
          name="OrderList"
          component={Order}
          options={{tabBarLabel: '주문내역'}}
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
