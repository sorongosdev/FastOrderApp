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
/** Consts */
import {HOME} from '../consts/BottomSheetConsts';

const {height} = Dimensions.get('window');
const SEARCHBAR_HEIGHT = HOME.SEARCHBAR_HEIGHT;
const LIST_ITEM_HEIGHT = HOME.LIST_ITEM_HEIGHT;
const NAVIGATIONBAR_HEIGHT = HOME.NAVIGATIONBAR_HEIGHT;
const HANDLE_HEIGHT = HOME.HANDLE_HEIGHT;

const SHEET_HEIGHT = height - SEARCHBAR_HEIGHT;
const MAX_Y = SHEET_HEIGHT; // 최상단
const MID_Y =
  SHEET_HEIGHT +
  SHEET_HEIGHT -
  SEARCHBAR_HEIGHT -
  LIST_ITEM_HEIGHT -
  NAVIGATIONBAR_HEIGHT;
const MIN_Y = MID_Y + LIST_ITEM_HEIGHT - HANDLE_HEIGHT + 10; // 최하단

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

  const translateY = useSharedValue(MID_Y);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const handleGesture = (event: PanGestureHandlerGestureEvent) => {
    if (event.nativeEvent.translationY < 0) {
      // 위로 슬라이드
      if (translateY.value === MIN_Y) {
        // 바텀시트 최하단일 때
        if (event.nativeEvent.velocityY < -900) {
          // 빠르게 슬라이드하면
          translateY.value = withTiming(MAX_Y, {duration: 300}); // 바텀시트 최상단으로
        } else {
          // 느리게 슬라이드하면
          translateY.value = withTiming(MID_Y, {duration: 300}); // 바텀시트 중간으로
        }
      } else if (translateY.value === MID_Y) {
        // 바텀시트 중간
        translateY.value = withTiming(MAX_Y, {duration: 300}); // 바텀시트 최상단으로
      }
    } else {
      // console.log(event.nativeEvent.velocityY);
      // 아래로 슬라이드
      if (translateY.value === MAX_Y) {
        // 바텀시트 최상단일 때
        if (event.nativeEvent.velocityY > 900) {
          // 빠르게 슬라이드하면
          translateY.value = withTiming(MIN_Y, {duration: 300}); // 바텀시트 최하단으로
        } else {
          // 느리게 슬라이드하면
          translateY.value = withTiming(MID_Y, {duration: 300}); // 바텀시트 중간으로
        }
      } else if (translateY.value === MID_Y) {
        // 바텀시트 중간
        translateY.value = withTiming(MIN_Y, {duration: 300}); // 바텀시트 최하단으로
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
