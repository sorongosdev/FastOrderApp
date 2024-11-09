import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../styles/StoreInfo';
import {NavigationProp} from '../navigation/NavigationProps';

/** Styles */

interface CombinedProp extends NavigationProp {
  storeId: number | null;
}

export default function OrderHistory({
  navigation,
  storeId,
}: CombinedProp): React.JSX.Element {
  //TODO: storeId로 특정 매장 조회
  return (
    <View style={styles.container}>
      <View style={styles.storeNameWrapper}>
        <Text style={styles.storeName}>찌개찌개</Text>
        <Text style={styles.storeType}>한식</Text>
      </View>

      <View style={styles.statusWrapper}>
        <Text style={styles.businessStatus}>영업중</Text>
        <Text style={styles.orderStatus}> • 패스트 오더 가능</Text>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={styles.imgScrollView}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.menuImg}></View>
        <View style={styles.menuImg}></View>
        <View style={styles.menuImg}></View>
        <View style={styles.menuImg}></View>
      </ScrollView>
    </View>
  );
}
