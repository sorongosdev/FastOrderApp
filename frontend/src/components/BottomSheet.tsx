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
} from 'react-native-gesture-handler';
import MainListItem from '../components/MainListItem';
import {NavigationProp} from '../navigation/NavigationProps';
import styles from '../styles/BottomSheet';

const {height} = Dimensions.get('window');
const MIN_Y = height + 312;
const MAX_Y = height;

export default function BottomSheet({
  navigation,
}: NavigationProp): React.JSX.Element {
  const translateY = useSharedValue(MIN_Y);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const handleGesture = (event: PanGestureHandlerGestureEvent) => {
    if (event.nativeEvent.translationY < 0) {
      // 위로 드래그
      translateY.value = withTiming(MAX_Y, {duration: 300}); // 바텀시트 최상단으로
    } else {
      // 아래로 드래그
      translateY.value = withTiming(MIN_Y, {duration: 300}); // 바텀시트 최하단으로
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
        <MainListItem navigation={navigation} />
        <MainListItem navigation={navigation} />
        <MainListItem navigation={navigation} />
      </Animated.View>
    </View>
  );
}
