import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// 앱의 모든 화면에 대한 파라미터 목록을 정의합니다
export type RootStackParamList = {
  BottomNavigation: undefined;
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
  Order: undefined;
  Likes: undefined;
  My: undefined;
  MyDetail: undefined;
  Store: { storeId: number };
  MenuInfo: { menuId: number };
  Pay: undefined;
  Shopping: undefined;
  Reception: { orderId: number };
};

// 기본 네비게이션 props (파라미터가 없는 화면용)
export interface NavigationProp {
  navigation: StackNavigationProp<RootStackParamList>;
}

// 특정 화면에 대한 네비게이션 props (파라미터가 있는 화면용)
export type StoreScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Store'>;
export type StoreScreenRouteProp = RouteProp<RootStackParamList, 'Store'>;

export type MenuInfoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MenuInfo'>;
export type MenuInfoScreenRouteProp = RouteProp<RootStackParamList, 'MenuInfo'>;

export type ReceptionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Reception'>;
export type ReceptionScreenRouteProp = RouteProp<RootStackParamList, 'Reception'>;

// 특정 화면의 props 인터페이스
export interface StoreScreenProps {
  navigation: StoreScreenNavigationProp;
  route: StoreScreenRouteProp;
}

export interface MenuInfoScreenProps {
  navigation: MenuInfoScreenNavigationProp;
  route: MenuInfoScreenRouteProp;
}

export interface ReceptionScreenProps {
  navigation: ReceptionScreenNavigationProp;
  route: ReceptionScreenRouteProp;
}