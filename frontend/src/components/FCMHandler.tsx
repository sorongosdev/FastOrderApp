import React, {useEffect} from 'react';
import {Alert, Platform} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import FlashMessage, {showMessage} from 'react-native-flash-message';

const FCMHandler: React.FC = () => {
  useEffect(() => {
    // PushNotification 설정
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
      requestPermissions: Platform.OS === 'ios',
    });

    // 알림 채널 생성
    PushNotification.createChannel(
      {
        channelId: 'default_channel',
        channelName: 'Default Channel',
        channelDescription: 'Default channel for app notifications',
        soundName: 'default',
        vibrate: true,
      },
      created => console.log(`createChannel returned '${created}'`),
    );

    // 백그라운드 메시지 핸들러
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
      // 백그라운드에서 수신된 메시지 처리
      const title = remoteMessage.notification?.title || 'Default Title';
      const body = remoteMessage.notification?.body || 'Default Body';

      // 상태바에 알림 표시
      PushNotification.localNotification({
        channelId: 'default_channel',
        title: title,
        message: body,
      });

      // FlashMessage는 포그라운드에서만 표시 가능하므로, Alert로 대체
      Alert.alert(title, body);
    });

    // 포그라운드에서 메시지 수신
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const title = remoteMessage.notification?.title || 'Default Title';
      const body = remoteMessage.notification?.body || 'Default Body';

      // 상태바에 알림 표시
      PushNotification.localNotification({
        channelId: 'default_channel',
        title: title,
        message: body,
      });

      // FlashMessage로 알림 표시
      showMessage({
        message: title,
        description: body,
        type: 'info',
        duration: 4000,
      });

      // 필요시 Alert도 유지
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

  return <FlashMessage position="top" />;
};

export default FCMHandler;
