import styles from '../styles/LikesStoreHeader';

import {View, Text} from 'react-native';
/**Icons */

export default function LikesStoreHeader(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={[styles.divider, {height: 6}]}></View>

      <View style={styles.wrapper}>
        <Text style={styles.storeName}>백소정 안산 한양대점</Text>
        <Text style={styles.storeCategory}>일식당</Text>
      </View>
    </View>
  );
}
