import React from 'react';
import {View} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps';

/** Style */
import styles from '../styles/Order';
/**Components */
import OrderListItem from '../components/OrderListItem';
import AppbarDefault from '../components/AppbarDefault';

export default function Order({navigation}: NavigationProp): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppbarDefault title="주문내역" />
      <View style={styles.divder}></View>
      <View style={styles.orderListContainer}>
        <OrderListItem navigation={navigation} />
        <OrderListItem navigation={navigation} />
        <OrderListItem navigation={navigation} />
      </View>
    </View>
  );
}
