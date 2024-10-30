import styles from '../styles/AppbarLikes';

import {View, Text} from 'react-native';
/**Icons */
import CartIcon from '@assets/icon_cart.svg';
import {NavigationProp} from '../navigation/NavigationProps';

export default function AppbarLikes({
  navigation,
}: NavigationProp): React.JSX.Element {
  const navigateToShopping = () => {
    navigation.navigate('Shopping');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ㅇㅇ님의 찜</Text>
      <View style={styles.rightContainer}>
        <CartIcon onPress={navigateToShopping} />
      </View>
    </View>
  );
}
