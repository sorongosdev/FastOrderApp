import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
/** Icons */
import DetailIcon from '@assets/icon_details.svg';
import CloseIcon from '@assets/icon_cancel.svg';
import styles from '../styles/OrderListItem';
/** Props */
import {NavigationProp} from '../navigation/NavigationProps';

interface OrderListProp {
  date: string;
  progress: string;
  storeName: string;
  menuName: string;
}

interface CombinedInterface extends NavigationProp, OrderListProp {}

export default function OrderListItem({
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
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <View style={styles.dateWrapper}>
          <Text>{date}</Text>
          <Text> • {progress}</Text>
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
    </View>
  );
}
