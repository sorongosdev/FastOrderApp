import React from 'react';
import 'react-native-gesture-handler';
import Login from './src/pages/Login';
import Main from './src/pages/Main';
import MyDetail from './src/pages/MyDetail';
import Store from './src/pages/Store';
import SignUp from './src/pages/SignUp';
import MenuInfo from './src/pages/MenuInfo';
import Shopping from './src/pages/Shopping';
import Pay from './src/pages/Pay';
import Reception from './src/pages/Reception';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';

const Stack = createStackNavigator();

export default function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            // Appbar을 기본적으로 보여주고 있어서 일단 앱바 제거함
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyDetail"
            component={MyDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Store"
            component={Store}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MenuInfo"
            component={MenuInfo}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Shopping"
            component={Shopping}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Pay"
            component={Pay}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Reception"
            component={Reception}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
