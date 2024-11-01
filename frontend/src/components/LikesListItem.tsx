import React from 'react';
import {View, Text} from 'react-native';
/** Icons */
import CloseIcon from '@assets/icon_close.svg';

/** Styles */
import styles from '../styles/LikesListItem';

interface LikesListItemProp {
  key: number;
  name: string;
  price: string;
  img: string;
  editButtonClicked: boolean;
}

export default function LikesListItem({
  key,
  name,
  price,
  img,
  editButtonClicked,
}: LikesListItemProp): React.JSX.Element {
  return (
    <View style={styles.totalContainer}>
      <View style={[styles.divider, {height: 1}]}></View>
      <View style={styles.contentContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.menuWrapper}>
            <Text style={styles.menuName}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.menuImg}></View>
          <View
            style={[
              styles.closeIconBox,
              {display: editButtonClicked ? 'flex' : 'none'},
            ]}>
            <CloseIcon />
          </View>
        </View>
      </View>
    </View>
  );
}
