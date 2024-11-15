import {View, Text} from 'react-native';
/**Icons */
import CartIcon from '@assets/icon_cart.svg';
/**Styles */
import styles from '../styles/AppbarSmall';
import {NavigationProp} from '../navigation/NavigationProps';

interface AppbarProp {
  title: string;
}

interface CombinedProps extends NavigationProp, AppbarProp {}

export default function AppbarSmall({
  navigation,
  title,
}: CombinedProps): React.JSX.Element {
  const navigateToShopping = () => {
    navigation.navigate('Shopping');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightContainer}>
        <CartIcon onPress={navigateToShopping} />
      </View>
    </View>
  );
}
