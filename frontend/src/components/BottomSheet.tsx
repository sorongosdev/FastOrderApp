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
import OrderHistory from '../components/OrderHistory';

const LIST_ITEM_HEIGHT = HOME.LIST_ITEM_HEIGHT;
const HANDLE_HEIGHT = HOME.HANDLE_HEIGHT;

interface CombinedInterface extends NavigationProp {
  storeId: number | null;
}

export default function BottomSheet({
  navigation,
  storeId,
}: CombinedInterface): React.JSX.Element {
  const MAX_HEIGHT = LIST_ITEM_HEIGHT * 2; // 최상단 높이
  const MID_HEIGHT = LIST_ITEM_HEIGHT; // 중간 높이
  const MIN_HEIGHT = HANDLE_HEIGHT; // 최하단 높이

  const heightValue = useSharedValue(MID_HEIGHT); // 초기 높이 설정
  const handlePosition = useSharedValue(MID_HEIGHT); // 핸들의 Y 위치

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: heightValue.value,
    };
  });

  const handleGesture = (event: PanGestureHandlerGestureEvent) => {
    const translationY = event.nativeEvent.translationY;

    // 드래그 거리의 일부만 사용하여 높이를 업데이트
    const dragFactor = 0.2; // 드래그 반응 비율 조정
    const newHeight = heightValue.value - translationY * dragFactor;

    // 새로운 높이가 MIN_HEIGHT와 MAX_HEIGHT 사이에 있는지 확인
    if (newHeight > MAX_HEIGHT) {
      heightValue.value = MAX_HEIGHT;
    } else if (newHeight < MIN_HEIGHT) {
      heightValue.value = MIN_HEIGHT;
    } else {
      heightValue.value = newHeight; // 높이 업데이트
    }
  };

  const handleGestureEnd = () => {
    // 드래그가 끝났을 때 높이에 따라 고정
    if (heightValue.value > MAX_HEIGHT - 100) {
      heightValue.value = withTiming(MAX_HEIGHT, {duration: 100});
    } else if (heightValue.value > MID_HEIGHT - 150) {
      heightValue.value = withTiming(MID_HEIGHT, {duration: 100});
    } else {
      heightValue.value = withTiming(MIN_HEIGHT, {duration: 100});
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sheet, animatedStyle]}>
        <PanGestureHandler
          onGestureEvent={handleGesture}
          onEnded={handleGestureEnd}>
          <View style={styles.handleBox}>
            <View style={styles.handle} />
          </View>
        </PanGestureHandler>
        <Text style={styles.bottomSheetTitle}>{storeId}</Text>
        <OrderHistory navigation={navigation} />
      </Animated.View>
    </View>
  );
}
