import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps'; // 인터페이스 import

export default function Main({navigation}: NavigationProp): React.JSX.Element {
  /** 가게 상세로 이동*/
  const navigateToStore = () => {
    navigation.navigate('Store');
  };

  return (
    <View style={styles.wrap}>
      {/* Main Page 텍스트 클릭 시 Store Information으로 이동 */}
      <Text style={styles.text} onPress={navigateToStore}>
        Main Page
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  text: {
    fontSize: 30,
  },
});
