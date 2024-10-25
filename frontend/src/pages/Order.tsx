import React from 'react';
import {View} from 'react-native';
/** Style */
import styles from '../styles/Order';
/**Components */
import OrderListItem from '../components/OrderListItem';
import AppbarDefault from '../components/AppbarDefault';

export default function Order(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppbarDefault title="주문내역" />
      <View style={styles.divder}></View>
      <View style={styles.orderListContainer}>
        <OrderListItem />
        <OrderListItem />
        <OrderListItem />
      </View>
    </View>
  );
}
