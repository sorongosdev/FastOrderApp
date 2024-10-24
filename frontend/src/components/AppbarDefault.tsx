import styles from '../styles/AppbarDefault';

import {View, Text} from 'react-native';

export default function AppbarDefault(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>주문내역</Text>
    </View>
  );
}
