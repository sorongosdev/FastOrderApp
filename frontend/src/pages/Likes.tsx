import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
/** Style */
import styles from '../styles/Likes';
/** Components */
import AppbarSmall from '../components/AppbarSmall';
import LikesListItem from '../components/LikesListItem';
/** Packages */
import {ScrollView} from 'react-native-gesture-handler';
import LikesStoreHeader from '../components/LikesStoreHeader';
/** Redux */
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { fetchWishlist } from '../redux/slices/wishlistSlice';
/** Props */
import {NavigationProp} from '../navigation/NavigationProps';

export default function Likes({navigation}: NavigationProp): React.JSX.Element {
  const dispatch = useAppDispatch();
  const { token, userId } = useAppSelector(state => state.user);
  const { stores, isLoading } = useAppSelector(state => state.wishlist);
  
  const [editButton, setEditButton] = useState(false);

  // 컴포넌트 마운트 시 찜 목록 불러오기
  useEffect(() => {
    if (token) {
      dispatch(fetchWishlist(token));
    }
  }, [dispatch, token]);

  const toggleEditButton = () => {
    setEditButton(prevEditButton => !prevEditButton);
  };

  return (
    <View style={styles.container}>
      <AppbarSmall title={`${userId || ''}님의 찜`} navigation={navigation} />
      <View style={[styles.divider, {height: 2}]}></View>
      <View style={styles.editWrapper}>
        <TouchableOpacity style={styles.editButton} onPress={toggleEditButton}>
          <Text style={styles.editText}>{editButton ? '완료' : '편집'}</Text>
        </TouchableOpacity>
      </View>
      
      {isLoading ? (
        <View style={styles.contentContainer}>
          <Text style={{ textAlign: 'center', marginTop: 20 }}>불러오는 중...</Text>
        </View>
      ) : (
        <ScrollView style={styles.contentContainer}>
          {stores.length === 0 ? (
            <Text style={{ textAlign: 'center', marginTop: 20 }}>찜한 가게나 메뉴가 없습니다.</Text>
          ) : (
            stores.map((store) => (
              <View key={store.store_id}>
                <LikesStoreHeader
                  storeId={store.store_id}
                  storeName={store.store_name}
                  storeDescription={store.store_description}
                />
                {store.menus.map((menu, menuIndex) => (
                  <LikesListItem
                    key={menuIndex}
                    id={menu.menu_id}
                    name={menu.menu_name}
                    price={menu.menu_price}
                    img={menu.menu_image_url}
                    editButtonClicked={editButton}
                    storeId={store.store_id}
                    onRemoveMenu={() => {}} // onRemoveMenu prop 추가
                  />
                ))}
              </View>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
}