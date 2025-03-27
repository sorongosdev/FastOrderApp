import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';

// Redux 관련 import 추가
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';

import Login from './src/pages/Login';
import MyDetail from './src/pages/MyDetail';
import Store from './src/pages/Store';
import SignUp from './src/pages/SignUp';
import MenuInfo from './src/pages/MenuInfo';
import Shopping from './src/pages/Shopping';
import Pay from './src/pages/Pay';
import Reception from './src/pages/Reception';


/** Components */
import BottomNavigation from './src/components/BottomNavigation';
import FCMHandler from './src/components/FCMHandler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

const MenuInfoWrapper = (props: any) => <MenuInfo {...props} />;

export default function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <FCMHandler />
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BottomNavigation"
                component={BottomNavigation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MyDetail"
                component={MyDetail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Store"
                component={Store}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="MenuInfo"
                component={MenuInfoWrapper}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Shopping"
                component={Shopping}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Pay"
                component={Pay}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Reception"
                component={Reception}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}