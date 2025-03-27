import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { NavigationProp } from '../navigation/NavigationProps';
/** Redux */
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
/** Icons */
import DetailIcon from '@assets/icon_details.svg';
import EmptyLikeIcon from '@assets/icon_empty_like.svg';
import FullLikeIcon from '@assets/icon_full_like.svg';
/** Styles */
import styles from '../styles/MainListItem';
import MainModal from './MainModal';

interface MainListProp {
  date: string;
  progress: string;
  storeName: string;
  menuName: string;
  storeId: number; // 가게 ID 추가
  menuId?: number; // 메뉴 ID 추가 (옵션)
  isLiked?: boolean; // 찜 상태 (옵션)
}

interface CombinedInterface extends NavigationProp, MainListProp {}

export default function MainListItem({
  navigation,
  date,
  progress,
  storeName,
  menuName,
  storeId,
  menuId,
  isLiked = false, // 기본값 설정
}: CombinedInterface): React.JSX.Element {
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => state.user.token);
  const [likeChecked, setLikeChecked] = useState<boolean>(isLiked);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // isLiked prop이 변경되었을 때 상태 업데이트
  useEffect(() => {
    setLikeChecked(isLiked);
  }, [isLiked]);

  const navigateToPay = () => {
    navigation.navigate('Pay');
  };

  const handleLikePress = () => {
    if (likeChecked) {
      setModalVisible(true);
    } else {
      setLikeChecked(true);
      // 찜 추가 - Redux 액션 디스패치
      if (token) {
        dispatch(addToWishlist({ 
          token, 
          storeId, 
          menuId // menuId가 있으면 메뉴 찜, 없으면 가게 찜
        }));
      }
    }
  };

  const confirmLike = () => {
    setLikeChecked(false);
    setModalVisible(false);
    // 찜 제거 - Redux 액션 디스패치
    if (token) {
      dispatch(removeFromWishlist({ 
        token, 
        storeId, 
        menuId // menuId가 있으면 메뉴 찜 제거, 없으면 가게 찜 제거
      }));
    }
  };

  const cancelLike = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <View style={styles.sheetDateContainer}>
        <View style={styles.sheetDateLeftWrapper}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.progress}> • {progress}</Text>
        </View>
        <View style={styles.likeIconBox}>
          <TouchableOpacity onPress={handleLikePress}>
            {likeChecked ? <FullLikeIcon /> : <EmptyLikeIcon />}
          </TouchableOpacity>
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
      <View style={styles.divider}></View>
      <MainModal
        visible={modalVisible}
        onClose={cancelLike}
        onConfirm={confirmLike}
      />
    </View>
  );
}