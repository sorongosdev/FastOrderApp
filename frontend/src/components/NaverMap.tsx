import React from 'react';
import {StyleSheet, View, Dimensions, SafeAreaView} from 'react-native';
import {NaverMapView} from '@mj-studio/react-native-naver-map';

interface NaverMapProps {
  clientId: string;
}

interface Coord {
  latitude: number;
  longitude: number;
}

const NaverMap: React.FC<NaverMapProps> = ({clientId}) => {
  const handleMapTap = (params: Coord & {x: number; y: number}) => {
    console.log('맵이 클릭되었습니다:', params);
  };

  const {height} = Dimensions.get('window'); // 화면의 높이 가져오기
  const containerHeight = height - 200; // 74를 뺀 높이 계산

  return (
    <View style={styles.container}>
      <NaverMapView
        style={{width: '100%', height: containerHeight}}
        isShowLocationButton={true}
        onTapMap={handleMapTap}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // borderWidth: 1,
  },
});

export default NaverMap;
