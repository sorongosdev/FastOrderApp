import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { NavigationProp } from '../navigation/NavigationProps';
/** Redux */
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { fetchOrderHistory } from '../redux/slices/orderHistorySlice';

/** Components */
import MainListItem from '../components/MainListItem';
/** Styles */
import styles from '../styles/OrderHistory';

export default function OrderHistory({
  navigation,
}: NavigationProp): React.JSX.Element {
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => state.user.token);
  const userName = useAppSelector(state => state.user.userName);
  const { items: orderHistoryItems, isLoading } = useAppSelector(state => state.orderHistory);

  // 컴포넌트 마운트 시 주문 내역 불러오기
  React.useEffect(() => {
    if (token) {
      dispatch(fetchOrderHistory(token));
    }
  }, [dispatch, token]);

  // 기본 주문 내역 데이터 (토큰이 없거나 API 응답이 없을 때 사용)
  const defaultOrderHistory = [
    {
      id: 1,
      date: '8.17(수)',
      progress: '픽업완료',
      storeName: '찌개찌개',
      menuName: '김치찌개 외 1개 28,000원',
      storeId: 1,
      isLiked: false,
      menuIds: [101] // 임의의 메뉴 ID 배열 추가
    },
    {
      id: 2,
      date: '8.16(화)',
      progress: '픽업완료',
      storeName: '찌개찌개',
      menuName: '된장찌개 외 1개 27,000원',
      storeId: 1,
      isLiked: false,
      menuIds: [102] // 임의의 메뉴 ID 배열 추가
    },
    {
      id: 3,
      date: '8.15(월)',
      progress: '픽업완료',
      storeName: '찌개찌개',
      menuName: '김치찌개 외 1개 26,000원',
      storeId: 1,
      isLiked: false,
      menuIds: [103] // 임의의 메뉴 ID 배열 추가
    },
  ];

  // 실제 사용할 주문 내역 데이터
  const recentMenu = orderHistoryItems.length > 0
    ? orderHistoryItems.map(item => ({
      id: item.id,
      date: item.date,
      progress: item.progress,
      storeName: item.storeName,
      menuName: `${item.menuName} ${item.totalItems > 1 ? `외 ${item.totalItems - 1}개` : ''} ${item.totalPrice.toLocaleString()}원`,
      storeId: item.storeId,
      menuIds: item.menuIds,
      isLiked: item.isLiked
    }))
    : defaultOrderHistory;

  if (isLoading) {
    return (
      <View>
        <Text style={styles.bottomSheetTitle}>주문 내역을 불러오는 중...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.bottomSheetTitle}>{userName || 'ㅇㅇ'}님의 최근 주문내역이에요!</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 68 }}>
        {recentMenu.map((menu, index) => (
          <MainListItem
            key={menu.id || index}
            navigation={navigation}
            date={menu.date}
            progress={menu.progress}
            storeName={menu.storeName}
            menuName={menu.menuName}
            storeId={menu.storeId}
            menuId={menu.menuIds ? menu.menuIds[0] : undefined} // optional chaining 사용
            isLiked={menu.isLiked}
          />
        ))}
      </ScrollView>
    </View>
  );
}