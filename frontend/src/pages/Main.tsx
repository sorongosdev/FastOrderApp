import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps';
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

  const MainScreen = () => (
    <View style={styles.wrap}>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.input} placeholder="검색" />
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
      <View>
        <Text style={styles.text} onPress={navigateToStore}>
          Go to Store Information
        </Text>
      </View>
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginTop: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 42,
    backgroundColor: '#E0E0E0',
  },
  searchBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    paddingTop: 5.7,
    paddingHorizontal: 25,
    paddingBottom: 15,
    width: '100%',
    backgroundColor: '#fff',
  },
  buttonGroup: {
    display: 'flex',
    gap: 5,
    flexDirection: 'row',
  },
  chip: {
    paddingVertical: 3,
    paddingHorizontal: 9,
    borderRadius: 44,
  },
  chipContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  iconBox: {
    width: 16,
    height: 16,
    backgroundColor: '#9A9A9A',
  },
});
