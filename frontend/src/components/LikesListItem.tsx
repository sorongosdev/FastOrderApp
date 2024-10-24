import React from 'react';
import {View, Text} from 'react-native';

/** Styles */
import styles from '../styles/LikesListItem';
/** Icons */
import HamburgerIcon from '../assets/icon_hamburger.svg';

export default function LikesListItem(): React.JSX.Element {
  return (
    <View style={styles.totalContainer}>
      <View style={[styles.divider, {height: 1}]}></View>
      <View style={styles.contentContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.iconBox}>
            <HamburgerIcon />
          </View>
          <View style={styles.menuWrapper}>
            <Text style={styles.menuName}>제육볶음</Text>
            <Text style={styles.price}>7,000원</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.menuImg}></View>
        </View>
      </View>
    </View>
  );
}
