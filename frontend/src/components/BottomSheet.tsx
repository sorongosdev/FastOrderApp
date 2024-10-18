import React from 'react';
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

const {height} = Dimensions.get('window');
const SEARCHBAR_HEIGHT = 94;
const SHEET_HEIGHT = height - SEARCHBAR_HEIGHT;
const LIST_ITEM_HEIGHT = 238;
const NAVIGATIONBAR_HEIGHT = 74;
const HANDLE_HEIGHT = 44;
const MAX_Y = SHEET_HEIGHT; // 최상단
// const MID_Y = MAX_Y + SHEET_HEIGHT - LIST_ITEM_HEIGHT; // 중간 상태 // 300
const MID_Y =
  SHEET_HEIGHT +
  SHEET_HEIGHT -
  SEARCHBAR_HEIGHT -
  LIST_ITEM_HEIGHT -
  NAVIGATIONBAR_HEIGHT;
const MIN_Y = MID_Y + LIST_ITEM_HEIGHT - HANDLE_HEIGHT; // 최하단

export default function BottomSheet({
  navigation,
}: NavigationProp): React.JSX.Element {
  const translateY = useSharedValue(MID_Y);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const handleGesture = (event: PanGestureHandlerGestureEvent) => {
    if (event.nativeEvent.translationY < 0) {
      console.log(height);
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
      console.log(height);

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
          showsVerticalScrollIndicator={false} // 수직 스크롤 바 숨기기
        >
          <MainListItem navigation={navigation} />
          <MainListItem navigation={navigation} />
          <MainListItem navigation={navigation} />
          <MainListItem navigation={navigation} />
          <MainListItem navigation={navigation} />
        </ScrollView>
      </Animated.View>
    </View>
  );
}
