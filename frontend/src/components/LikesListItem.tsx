import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
/** Icons */
import CloseIcon from '@assets/icon_close.svg';

/** Styles */
import styles from '../styles/LikesListItem';

interface LikesListItemProp {
  id?: number; // id 속성 추가
  name: string;
  price: number;
  img: string;
  editButtonClicked: boolean;
  storeId: number;
  onRemoveMenu: (menuId: number, storeId: number) => void;
}

export default function LikesListItem({
  id, // id 추가
  name,
  price,
  img,
  editButtonClicked,
  storeId,
  onRemoveMenu,
}: LikesListItemProp): React.JSX.Element {

  const formatPrice = (price: number) => new Intl.NumberFormat("ko-KR").format(price);
  
  return (
    <View style={styles.totalContainer}>
      <View style={[styles.divider, {height: 1}]}></View>
      <View style={styles.contentContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.menuWrapper}>
            <Text style={styles.menuName}>{name}</Text>
            <Text style={styles.price}>{`${formatPrice(price)}원`}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.menuImg}>
            <Image source={{uri: img}} style={{height:'100%' ,width:'100%'}}/>
          </View>
          <TouchableOpacity
            style={[
              styles.closeIconBox,
              {display: editButtonClicked ? 'flex' : 'none'},
            ]} onPress={() => onRemoveMenu(id || 0, storeId)}>
              <CloseIcon />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}