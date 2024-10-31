import React from 'react';
import {StyleSheet, View, Dimensions, SafeAreaView} from 'react-native';
import {
  NaverMapView,
  NaverMapMarkerOverlay,
} from '@mj-studio/react-native-naver-map';
import {NavigationProp} from '../navigation/NavigationProps';

interface NaverMapProps {
  clientId: string;
}

interface Coord {
  latitude: number;
  longitude: number;
}

interface Region {
  latitude: number;
  latitudeDelta: number;
  longitude: number;
  longitudeDelta: number;
}

export default function NaverMap({
  navigation,
}: NavigationProp): React.JSX.Element {
  const handleMapTap = (params: Coord & {x: number; y: number}) => {
    console.log('맵이 클릭되었습니다:', params);
  };

  const handleStore = () => {
    navigation.navigate('Store');
  };

  const regions: Region[] = [
    {
      // 마라미방 : 37.299701, 126.838338
      latitude: 37.299701,
      longitude: 126.838338,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    },
    {
      // 인더비엣 37.300986, 126.837876
      latitude: 37.300986,
      longitude: 126.837876,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    },
    {
      // 도스마스 "latitude": 37.29977232411561, "longitude": 126.83849480719579
      latitude: 37.29977232411561,
      longitude: 126.83849480719579,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    },
  ];

  const initialRegion: Region = {
    latitude: 37.29879436841754,
    longitude: 126.83961892219863,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  const {height} = Dimensions.get('window');
  const containerHeight = height - 200;

  return (
    <View style={styles.container}>
      <NaverMapView
        style={{width: '100%', height: containerHeight}}
        isShowLocationButton={true}
        initialRegion={initialRegion}
        onTapMap={handleMapTap}>
        {regions.map((region, index) => (
          <NaverMapMarkerOverlay
            key={index} // 각 마커에 고유한 키를 부여
            latitude={region.latitude}
            longitude={region.longitude}
            onTap={() => handleStore()}
            anchor={{x: 229, y: height / 2}}
            width={80}
            height={80}
            image={require('../assets/icon_marker.png')}
          />
        ))}
      </NaverMapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
