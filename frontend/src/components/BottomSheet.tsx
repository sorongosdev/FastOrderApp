import React, {useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  ScrollView,
} from 'react-native-gesture-handler';
import MainListItem from '../components/MainListItem';
import {NavigationProp} from '../navigation/NavigationProps';
import styles from '../styles/BottomSheet';
import {HOME} from '../consts/BottomSheetConsts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LIST_ITEM_HEIGHT = HOME.LIST_ITEM_HEIGHT;
const HANDLE_HEIGHT = HOME.HANDLE_HEIGHT;

export default function BottomSheet({
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

  const MAX_HEIGHT = LIST_ITEM_HEIGHT * 2; // 최상단 높이
  const MID_HEIGHT = LIST_ITEM_HEIGHT; // 중간 높이
  const MIN_HEIGHT = HANDLE_HEIGHT; // 최하단 높이

  const heightValue = useSharedValue(MID_HEIGHT); // 초기 높이 설정

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: heightValue.value,
    };
  });

  const handleGesture = (event: PanGestureHandlerGestureEvent) => {
    if (event.nativeEvent.translationY < 0) {
      // 위로 슬라이드
      if (heightValue.value === MIN_HEIGHT) {
        // 바텀시트 최하단일 때
        heightValue.value = withTiming(MID_HEIGHT, {duration: 300}); // 중간으로
      } else if (heightValue.value === MID_HEIGHT) {
        // 바텀시트 중간
        heightValue.value = withTiming(MAX_HEIGHT, {duration: 300}); // 최상단으로
      }
    } else {
      // 아래로 슬라이드
      if (heightValue.value === MAX_HEIGHT) {
        // 바텀시트 최상단일 때
        heightValue.value = withTiming(MID_HEIGHT, {duration: 300}); // 중간으로
      } else if (heightValue.value === MID_HEIGHT) {
        // 바텀시트 중간
        heightValue.value = withTiming(MIN_HEIGHT, {duration: 300}); // 최하단으로
      }
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sheet, animatedStyle]}>
        <PanGestureHandler onGestureEvent={handleGesture}>
          <View style={styles.handleBox}>
            <View style={styles.handle} />
          </View>
        </PanGestureHandler>
        <Text style={styles.bottomSheetTitle}>
          ㅇㅇ님의 최근 주문내역이에요!
        </Text>
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
      </Animated.View>
    </View>
  );
}
