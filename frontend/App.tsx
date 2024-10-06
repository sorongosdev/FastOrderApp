import 'react-native-gesture-handler';
import Login from './src/pages/Login';
import Main from './src/pages/Main';
import Store from './src/pages/Store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Store" component={Store} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
