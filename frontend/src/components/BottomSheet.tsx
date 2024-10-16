import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import MainListItem from '../components/MainListItem';
import {NavigationProp} from '../navigation/NavigationProps';
import styles from '../styles/BottomSheet';

const {height} = Dimensions.get('window'); // 화면 높이 가져오기
// const INITIAL_Y = height + 312; // 초기 위치 (화면 아래쪽)
const MIN_Y = height + 312;
const MAX_Y = height; // 화면 최상단

export default function BottomButton({
  navigation,
}: NavigationProp): React.JSX.Element {
  const translateY = useSharedValue(MIN_Y); // 초기 위치 설정

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const handleGesture = (event: PanGestureHandlerGestureEvent) => {
    if (event.nativeEvent.translationY < 0) {
      // 위로 드래그
      translateY.value = withSpring(MAX_Y); // 바텀시트 최상단으로
    } else {
      // 아래로 드래그
      translateY.value = withSpring(MIN_Y); // 바텀시트 최하단으로
    }
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <Animated.View style={[styles.sheet, animatedStyle]}>
          <TouchableOpacity
            onPress={() => (translateY.value = withSpring(MAX_Y))}>
            <View style={styles.handleBox}>
              <View style={styles.handle} />
            </View>
          </TouchableOpacity>
          <MainListItem navigation={navigation} />
          <MainListItem navigation={navigation} />
          <MainListItem navigation={navigation} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}
