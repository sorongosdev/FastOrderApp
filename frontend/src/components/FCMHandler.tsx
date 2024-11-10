// src/components/FCMHandler.tsx

import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const FCMHandler = () => {
  useEffect(() => {
    // 백그라운드 메시지 핸들러
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    // 포그라운드에서 메시지 수신
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      // Alert.alert(
      //   JSON.stringify(remoteMessage.notification?.body),
      //   JSON.stringify(remoteMessage.notification?.body),
      // );

      const title = remoteMessage.notification?.title || 'Default Title';
      const body = remoteMessage.notification?.body || 'Default Body';

      Alert.alert(title, body);
    });

    // FCM 토큰 가져오기
    const getToken = async () => {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
    };

    getToken();

    // 컴포넌트 언마운트 시 구독 해제
    return () => unsubscribe();
  }, []);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
};

export default FCMHandler;
