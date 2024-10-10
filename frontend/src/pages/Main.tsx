import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationProp } from '../navigation/NavigationProps'; // 인터페이스 import
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

export default function Main({ navigation }: NavigationProp): React.JSX.Element {
  /** 가게 상세로 이동 */
  const navigateToStore = () => {
    navigation.navigate('Store');
  };

  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string; // iconName 타입 지정

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'cog';
            } else {
              iconName = 'circle'; // 기본 아이콘 설정
            }

            return <Icon name={iconName} size={size} color={color}/>;
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ tabBarLabel: 'Home' }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ tabBarLabel: 'Settings' }} 
        />
      </Tab.Navigator>
    // </NavigationContainer>
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
