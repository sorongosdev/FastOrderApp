import React from 'react';
import {StyleSheet, View, Dimensions, SafeAreaView} from 'react-native';
import {
  NaverMapView,
  NaverMapMarkerOverlay,
} from '@mj-studio/react-native-naver-map';
import {NavigationProp} from '../navigation/NavigationProps';
/** Styles */
import styles from '../styles/NaverMap';

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

interface Store {
  no: number;
  store_name: string;
  latitude: string;
  longitude: string;
}

interface StoreProp {
  stores: Store[]; // stores prop 정의
}

interface CombinedInterface extends NavigationProp, StoreProp {}

export default function NaverMap({
  navigation,
  stores,
}: CombinedInterface): React.JSX.Element {
  // const handleMapTap = (params: Coord & {x: number; y: number}) => {
  //   console.log('맵이 클릭되었습니다:', params);
  // };

  const handleStore = () => {
    navigation.navigate('Store');
  };

  const initialRegion: Region = {
    latitude: 37.297509529215484,
    longitude: 126.83672336012268,
    latitudeDelta: 0.004, // 위도 방향
    longitudeDelta: 0.002, // 경도 방향
  };

  console.log('Stores:', stores);

  return (
    <View style={styles.container}>
      <NaverMapView
        style={styles.mapContainer}
        isShowLocationButton={true}
        initialRegion={initialRegion}>
        {stores.map(store => (
          <NaverMapMarkerOverlay
            key={store.no} // 각 마커에 고유한 키 설정
            latitude={parseFloat(store.latitude)}
            longitude={parseFloat(store.longitude)}
            width={44}
            height={48}
            image={require('../assets/marker_cafe.png')} // 마커 이미지
          />
        ))}
      </NaverMapView>
    </View>
  );
}
