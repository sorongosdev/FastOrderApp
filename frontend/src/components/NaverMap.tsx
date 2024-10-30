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

export default function NaverMap({
  navigation,
}: NavigationProp): React.JSX.Element {
  const handleMapTap = (params: Coord & {x: number; y: number}) => {
    console.log('맵이 클릭되었습니다:', params);
  };

  const handleStore = () => {
    navigation.navigate('Store');
  };

  const {height} = Dimensions.get('window');
  const containerHeight = height - 200;

  return (
    <View style={styles.container}>
      <NaverMapView
        style={{width: '100%', height: containerHeight}}
        isShowLocationButton={true}
        onTapMap={handleMapTap}>
        <NaverMapMarkerOverlay
          latitude={37.29979436841754}
          longitude={126.83861892219863}
          onTap={() => handleStore()}
          anchor={{x: 229, y: 277}}
          width={80}
          height={80}
          image={require('../assets/icon_marker.png')}
        />
      </NaverMapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
