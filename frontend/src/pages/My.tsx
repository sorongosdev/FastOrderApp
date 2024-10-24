import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
/** Icons */
import DetailIcon from '@assets/icon_my_details.svg';
/** Style */
import styles from '../styles/My';
import AppbarDefault from '../components/AppbarDefault';

export default function My(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppbarDefault title="마이페이지" />
      <View style={styles.divider}></View>
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImg}></View>
          <View style={styles.profileWrapper}>
            <Text style={styles.name}>김돌돌</Text>
            <View style={styles.iconBox}>
              <DetailIcon />
            </View>
          </View>
        </View>
        {/* ~님의 포인트 */}
        <View style={styles.pointContainer}>
          <View style={styles.pointWrapper}>
            <Text style={styles.pointText}>돌돌님의 포인트</Text>
            <Text style={styles.pointText}>50,000원</Text>
          </View>
          <TouchableOpacity style={styles.chargeButton}>
            <Text style={styles.buttonText}>포인트로 충전하기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.couponContainer}>
          <Text>쿠폰</Text>
        </View>
      </View>
    </View>
  );
}
