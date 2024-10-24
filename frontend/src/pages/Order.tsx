import React from 'react';
import {Text, View} from 'react-native';
/** Style */
import styles from '../styles/Order';
import TopTitle from '../components/TopTitle';
import {NavigationProp} from '../navigation/NavigationProps';
import BottomButton from '../components/BottomButton';
/**Components */
import OrderListItem from '../components/OrderListItem';

export default function Order(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.appBarContainer}>
        <Text style={styles.appBarTitle}>주문내역</Text>
      </View>
      <View style={styles.divder}></View>
      <View style={styles.orderListContainer}>
        <OrderListItem />
        <OrderListItem />
        <OrderListItem />
      </View>
    </View>
  );
}
