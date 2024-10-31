import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps';

import DetailIcon from '@assets/icon_details.svg';
import styles from '../styles/MainListItem';

interface MainListProp {
  date: string;
  progress: string;
  storeName: string;
  menuName: string;
}

interface CombinedInterface extends NavigationProp, MainListProp {}

export default function MainListItem({
  navigation,
  date,
  progress,
  storeName,
  menuName,
}: CombinedInterface): React.JSX.Element {
  const navigateToPay = () => {
    navigation.navigate('Pay');
  };
  return (
    <View>
      <View style={styles.bottomSheetDateWrapper}>
        <Text>{date}</Text>
        <Text> • {progress}</Text>
      </View>
      <View style={styles.historyContainer}>
        {/* left */}
        <View style={styles.storeImg}></View>
        {/* right */}
        <View style={styles.orderContainer}>
          <View style={styles.storeWrapper}>
            <Text style={styles.storeText}>{storeName}</Text>
            <View style={styles.detailIconBox}>
              <DetailIcon></DetailIcon>
            </View>
          </View>
          <Text style={styles.menuText}>{menuName}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.orderButton} onPress={navigateToPay}>
        <Text style={styles.orderText}>같은 메뉴 주문하기</Text>
      </TouchableOpacity>
      <View style={styles.divider}></View>
    </View>
  );
}
