import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import DumplingIcon from '@assets/icon_dumpling.svg';
import styles from '../styles/CouponItem';

export default function CouponItem() {
  const StoreRightImg = require('../assets/coupon_store_img.png'); // require로 임포트
  const StoreLeftImg = require('../assets/store_logo_img.jpg'); // require로 임포트
  return (
    <View style={styles.coupon}>
      <View style={styles.couponLeftContainer}>
        <ImageBackground
          style={styles.storeImg}
          source={StoreLeftImg}></ImageBackground>
      </View>
      {/* 쿠폰영역 */}
      <View style={styles.couponRightContainer}>
        <ImageBackground
          style={styles.couponRightImg}
          source={StoreRightImg}
          imageStyle={{resizeMode: 'cover'}}></ImageBackground>
        <View style={styles.dim}>
          <View style={styles.couponContentContainer}>
            <Text style={styles.couponStoreName}>마라미방</Text>
            <View style={styles.couponBottomWrapper}>
              <DumplingIcon></DumplingIcon>
              <View style={styles.couponInfoWrapper}>
                <Text style={styles.couponCount}>쿠폰 5개</Text>
                <Text style={styles.couponDescription}>
                  앞으로 5개 더 모으면 꿔바로우 제공
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
