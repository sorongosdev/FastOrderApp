import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
/** Icons */
import DetailIcon from '@assets/icon_details.svg';
import CloseIcon from '@assets/icon_cancel.svg';
import styles from '../styles/OrderListItem';
/** Props */
import {NavigationProp} from '../navigation/NavigationProps';

export default function OrderListItem({
  navigation,
}: NavigationProp): React.JSX.Element {
  const navigateToPay = () => {
    navigation.navigate('Pay');
  };
  return (
    <View>
      <View style={styles.dateContainer}>
        <View style={styles.dateWrapper}>
          <Text>8.15(월)</Text>
          <Text> • 주문완료</Text>
        </View>
        <View style={styles.closeIcon}>
          <CloseIcon />
        </View>
      </View>
      <View style={styles.historyContainer}>
        {/* left */}
        <View style={styles.storeImg}></View>
        {/* right */}
        <View style={styles.orderContainer}>
          <View style={styles.storeWrapper}>
            <Text style={styles.storeText}>찌개찌개</Text>
            <View style={styles.detailIconBox}>
              <DetailIcon></DetailIcon>
            </View>
          </View>
          <Text style={styles.menuText}>김치찌개 외 1개 28,000원</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.orderButton} onPress={navigateToPay}>
        <Text style={styles.orderText}>같은 메뉴 주문하기</Text>
      </TouchableOpacity>
    </View>
  );
}
