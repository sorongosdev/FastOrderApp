import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import MainListItem from '../components/MainListItem';

/** Styles */
import {NavigationProp} from '../navigation/NavigationProps';

export default function OrderHistory({
  navigation,
}: NavigationProp): React.JSX.Element {
  const [recentMenu, setRecentMenu] = useState([
    {
      date: '8.17(수)',
      progress: '픽업완료',
      like: false,
      storeName: '찌개찌개',
      menuName: '김치찌개 외 1개 28,000원',
    },
    {
      date: '8.16(화)',
      progress: '픽업완료',
      like: false,
      storeName: '찌개찌개',
      menuName: '된장찌개 외 1개 27,000원',
    },
    {
      date: '8.15(월)',
      progress: '픽업완료',
      like: false,
      storeName: '찌개찌개',
      menuName: '김치찌개 외 1개 26,000원',
    },
  ]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 18}}>
      {recentMenu.map((menu, index) => (
        <MainListItem
          key={index}
          navigation={navigation}
          date={menu.date}
          progress={menu.progress}
          storeName={menu.storeName}
          menuName={menu.menuName}
        />
      ))}
    </ScrollView>
  );
}
