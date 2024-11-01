// src/navigation/BottomNavigation.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, StatusBar, View} from 'react-native';
/** Pages */
import Main from '../pages/Main';
import Order from '../pages/Order';
import Likes from '../pages/Likes';
import My from '../pages/My';
/** Icons */
import HomeIcon from '@assets/icon_home.svg';
import ListIcon from '@assets/icon_list_active.svg';
import LikeIcon from '@assets/icon_like.svg';
import MyIcon from '@assets/icon_my.svg';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
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
