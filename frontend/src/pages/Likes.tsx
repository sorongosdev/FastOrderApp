import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
/** Style */
import styles from '../styles/Likes';
/** Components */
import AppbarLikes from '../components/AppbarLikes';
import LikesListItem from '../components/LikesListItem';
/** Packages */
import {ScrollView} from 'react-native-gesture-handler';
import LikesStoreHeader from '../components/LikesStoreHeader';
/** Props */
import {NavigationProp} from '../navigation/NavigationProps';

export default function Likes({navigation}: NavigationProp): React.JSX.Element {
  const [likesMenu, setLikesMenu] = useState([
    {
      storeName: '백소정 안산 한양대점',
      storeType: '일식당',
      menus: [
        {name: '제육볶음', price: '7,000원', img: ''},
        {name: '쭈꾸미', price: '10,000원', img: ''},
        {name: '마라떡볶이', price: '14,000원', img: ''},
      ],
    },
    {
      storeName: '마라미방 안산 한양대점',
      storeType: '중식당',
      menus: [
        {name: '마라탕', price: '7,000원', img: ''},
        {name: '홍소육덮밥', price: '8,000원', img: ''},
        {name: '양고기덮밥', price: '8,000원', img: ''},
      ],
    },
    {
      storeName: '백소정 안산 한양대점',
      storeType: '일식당',
      menus: [
        {name: '제육볶음', price: '7,000원', img: ''},
        {name: '쭈꾸미', price: '10,000원', img: ''},
        {name: '마라떡볶이', price: '14,000원', img: ''},
      ],
    },
  ]);

  const [editButton, setEditButton] = useState(false);

  const toggleEditButton = () => {
    setEditButton(prevEditButton => !prevEditButton);
    console.log('edit button pressed');
  };

  return (
    <View style={styles.container}>
      <AppbarLikes navigation={navigation} />
      <View style={[styles.divider, {height: 2}]}></View>
      <View style={styles.editWrapper}>
        <TouchableOpacity style={styles.editButton} onPress={toggleEditButton}>
          <Text style={styles.editText}>{editButton ? '완료' : '편집'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contentContainer}>
        {likesMenu.map((item, index) => (
          <View key={index}>
            <LikesStoreHeader
              storeName={item.storeName}
              storeType={item.storeType}
            />
            {item.menus.map((menu, menuIndex) => (
              <LikesListItem
                key={menuIndex}
                name={menu.name}
                price={menu.price}
                img={menu.img}
                editButtonClicked={editButton}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
