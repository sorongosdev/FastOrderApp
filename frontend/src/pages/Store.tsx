import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps'; // 인터페이스 import

export default function Store(): React.JSX.Element {
  return (
    <View>
      <Text style={styles.text}>Store Information</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
