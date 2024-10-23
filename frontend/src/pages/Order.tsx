import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
/** Style */
import styles from '../styles/Order';

export default function Order(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>주문 목록</Text>
    </View>
  );
}
