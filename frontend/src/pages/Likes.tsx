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
import styles from '../styles/Likes';

export default function Likes(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>찜 목록</Text>
    </View>
  );
}
