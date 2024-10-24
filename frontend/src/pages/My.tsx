import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
/** Icons */
import DetailIcon from '@assets/icon_my_details.svg';
/** Style */
import styles from '../styles/My';
import AppbarDefault from '../components/AppbarDefault';
import {NavigationProp} from '../navigation/NavigationProps';

export default function My({navigation}: NavigationProp): React.JSX.Element {
  const handlePress = () => {
    navigation.navigate('MyDetail'); // MyDetail로 이동
  };

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
              <DetailIcon onPress={handlePress} />
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
        {/* 빈 공간 */}
        <View style={styles.couponContainer}></View>
        {/* 문의 및 알림 */}
        <View style={styles.helpContainer}>
          <View style={styles.helpTitle}>
            <Text style={styles.helpTitleText}>문의 및 알림</Text>
          </View>
          <View style={styles.helpMenuContainer}>
            <View style={styles.helpMenuWrapper}>
              <TouchableOpacity>
                <Text style={styles.helpMenuText}>고객센터</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.helpMenuText}>공지사항</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.helpMenuWrapper}>
              <TouchableOpacity>
                <Text style={styles.helpMenuText}>자주 묻는 질문</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.helpMenuText}>약관 및 정책</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
