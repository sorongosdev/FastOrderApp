import React from 'react';
import {View, SafeAreaView, StatusBar, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

/** Components */
import AppbarLeft from '../components/AppbarLeft';
/** Icons */
import ProfileIcon from '@assets/icon_profile_camera.svg';
import DetailIcon from '@assets/icon_my_details.svg';
/** Styles */
import styles from '../styles/MyDetail';

type MyDetailProps = {
  navigation: StackNavigationProp<any>; // StackNavigationProp으로 변경
  route: RouteProp<any, any>;
};

export default function MyDetail({
  navigation,
}: MyDetailProps): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <AppbarLeft title={'내 정보 수정'} />
      <View style={[styles.divider]}></View>
      <View style={styles.contentContainer}>
        <View style={styles.profileImgBox}>
          <ProfileIcon />
        </View>
        {/* 이름, 비밀번호 변경, 휴대폰 번호 변경 */}
        <View style={styles.personalInfoContainer}>
          <View style={styles.nameWrapper}>
            <Text>이름</Text>
            <View style={styles.nameRightWrapper}>
              <Text>김ㅇㅇ</Text>
              <DetailIcon width={8} height={17} />
            </View>
          </View>
          <View style={styles.listDivider}></View>
          <View style={styles.nameWrapper}>
            <Text>비밀번호 변경</Text>
            <View style={styles.nameRightWrapper}>
              <DetailIcon width={8} height={17} />
            </View>
          </View>
          <View style={styles.listDivider}></View>
          <View style={styles.nameWrapper}>
            <Text>휴대폰 번호 변경</Text>
            <View style={styles.nameRightWrapper}>
              <DetailIcon width={8} height={17} />
            </View>
          </View>
        </View>
        {/* 로그아웃, 회원탈퇴 */}
        <View style={styles.bottomContainer}>
          <View style={styles.bottomWrapper}>
            <Text style={styles.bottomText}>로그아웃</Text>
            <View style={styles.bottomDivider}></View>
            <Text style={styles.bottomText}>회원탈퇴</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
