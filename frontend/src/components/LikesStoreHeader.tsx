import styles from '../styles/LikesStoreHeader';

import {View, Text} from 'react-native';

interface LikesStoreHeaderProp {
  storeName: string;
  storeType: string;
}

export default function LikesStoreHeader({
  storeName,
  storeType,
}: LikesStoreHeaderProp): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={[styles.divider, {height: 6}]}></View>

      <View style={styles.wrapper}>
        <Text style={styles.storeName}>{storeName}</Text>
        <Text style={styles.storeCategory}>{storeType}</Text>
      </View>
    </View>
  );
}
