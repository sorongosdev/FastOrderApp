import styles from '../styles/LikesStoreHeader';
import CloseIcon from '@assets/icon_close.svg';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeWishlistStore, removeFromWishlist } from '../redux/slices/wishlistSlice';

import {View, Text, TouchableOpacity} from 'react-native';

interface LikesStoreHeaderProp {
  storeId: number; // 가게 ID 추가
  storeName: string;
  storeDescription: string | null;
}

export default function LikesStoreHeader({
  storeId,
  storeName,
  storeDescription,
}: LikesStoreHeaderProp): React.JSX.Element {
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => state.user.token);
  
  // 가게 찜 제거 핸들러
  const handleRemoveStore = () => {
    // 로컬 상태 업데이트
    dispatch(removeWishlistStore(storeId));
    
    // API 호출을 통한 서버 상태 업데이트 (토큰이 있는 경우)
    if (token) {
      dispatch(removeFromWishlist({ token, storeId }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.divider, {height: 6}]}></View>
      <View style={styles.wrapper}>
        <Text style={styles.storeName}>{storeName}</Text>
        <Text style={styles.storeCategory}>{storeDescription}</Text>
        <TouchableOpacity style={styles.cancelIcon} onPress={handleRemoveStore}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}