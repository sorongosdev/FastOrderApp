import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationProp } from '../navigation/NavigationProps'; // 인터페이스 import

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

  function handleMoveMap() {
    navigation.navigate('Main');
  }
  function handleMenuInfo() {
    navigation.navigate('MenuInfo');
  }

  return (
    <ScrollView contentContainerStyle={styles.wrap}>
      <View style={styles.storeImg}></View>
      <View style={styles.storeInfo}>
        <View style={styles.InfoText}>
          <Text style={styles.storeName}>찌개찌개</Text>
          <Text style={styles.storeUniqueMenu}>찌개, 전골</Text>
        </View>
        <View style={styles.InfoText}>
          <Text style={styles.storeAddress}>경기 안산시 상록구 한양대학로 60</Text>
        </View>
        <View style={styles.InfoText}>
          <Text style={styles.storeOpen}>영업중</Text>
          <Text style={styles.storeFastOrder}>{isFastOrderOn ? ' • 패스트 오더 가능' : ' • 패스트 오더 불가능'}</Text>
        </View>
        <View style={styles.InfoText}>
          <Text style={styles.storePhoneNumber}>010-7686-8560</Text>
        </View>
        <View style={styles.MapWrap}>
          <TouchableOpacity style={styles.storeMap} onPress={handleMoveMap}>
            <Text style={styles.storeMapText}>지도로 안내받기</Text>
          </TouchableOpacity>
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
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '0%',
    paddingBottom : '49%'
  },
  storeImg: {
    height: 157,
    width: '100%',
    backgroundColor: '#D9D9D9',
  },
  storeInfo: {
    height: '21%',
    width: '100%',
    marginTop: 23,
    marginLeft: 26.5,
  },
  InfoText: {
    flexDirection: 'row',
  },
  storeName: {
    color: '#484747',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  storeUniqueMenu: {
    color: '#7C7C7C',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    marginLeft: 9,
    marginTop : '0.5%'
  },
  storeAddress: {
    color: '#464646',
    fontSize: 14,
    fontStyle: 'normal',
    marginTop: 17,
  },
  storeOpen: {
    marginTop: 10,
    color: '#464646',
    fontSize: 14,
    fontStyle: 'normal',
  },
  storeFastOrder: {
    color: '#7C7C7C',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    marginTop: '2.6%',
  },
  storePhoneNumber: {
    color: '#464646',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    marginTop: 7,
  },
  storeMap: {
    width: 141,
    height: 33,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storeMapText: {
    color: '#464646',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  MapWrap: {
    width: '92%',
    alignItems: 'center',
    marginTop: 24,
  },
  padding: {
    width: '100%',
    height: 10,
    backgroundColor: '#D9D9D9',
  },
  menu: {
    width: '100%',
    height: '12%',
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#DFDFDF',
  },
  menuName: {
    color : '#484747',
    fontSize : 18,
    fontStyle : 'normal',
    fontWeight : '600',
    paddingLeft: '6%',
    paddingTop: '6%',
  },
  menuPrice: {
    color : '#484747',
    fontSize : 16,
    fontStyle : 'normal',
    fontWeight : '500',
    paddingLeft: '6%',
    marginTop: '5%',
  },
});
