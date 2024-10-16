import React, { useState } from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import { NavigationProp } from '../navigation/NavigationProps'; // 인터페이스 import
import back_arrow from '../assets/icon_back_arrow.svg'
import styles from '../styles/Store';
import { Image } from 'react-native-svg';

export default function Store({ navigation }: NavigationProp): React.JSX.Element {
  const [isFastOrderOn, setIsFastOrderOn] = useState(true);
  const menu = [
    { name: '제육볶음', price: '7,000원', img: '' },
    { name: '김치찌개', price: '6,500원', img: '' },
    { name: '된장찌개', price: '6,000원', img: '' },
    { name: '갈비탕', price: '8,000원', img: '' },
    { name: '비빔밥', price: '7,500원', img: '' },
    { name: '떡볶이', price: '5,500원', img: '' },
  ];


  function handleMenuInfo() {
    navigation.navigate('MenuInfo');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.wrap}>
        <View style={styles.storeImg}>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoText}>
            <Text style={styles.storeName}>찌개찌개</Text>
            <Text style={styles.storeUniqueMenu}>찌개, 전골</Text>
          </View>
          <View style={styles.infoText}>
            <Text style={styles.storeAddress}>경기 안산시 상록구 한양대학로 60</Text>
          </View>
          <View style={styles.infoText}>
            <Text style={styles.storeOpen}>영업중</Text>
            <Text style={styles.storeFastOrder}>{isFastOrderOn ? ' • 패스트 오더 가능' : ' • 패스트 오더 불가능'}</Text>
          </View>
          <View style={styles.infoText}>
            <Text style={styles.storePhoneNumber}>010-7686-8560</Text>
          </View>
        </View>

        <View style={styles.padding}></View>

        {menu.map((item, index) => (
          <View key={index} style={styles.menu}>
            <Text style={styles.menuName} onPress={handleMenuInfo}>{item.name}</Text>
            <Text style={styles.menuPrice}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

