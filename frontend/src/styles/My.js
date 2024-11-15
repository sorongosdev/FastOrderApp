import {StyleSheet, Dimensions} from 'react-native';
import StoreImg from '../components/StoreImg';

const {width} = Dimensions.get('window');
const CONTENT_HORIZONTAL_PADDING = 25; // 양쪽 여백
const COUPON_WIDTH = width - CONTENT_HORIZONTAL_PADDING * 2; // 쿠폰 너비
const COUPON_HEIGHT = COUPON_WIDTH * 0.7; // 쿠폰 높이

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
  },
  divider: {
    height: 10,
    color: '#F5F5F5',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: CONTENT_HORIZONTAL_PADDING,
    paddingTop: 20,
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 19,
  },
  profileImg: {
    backgroundColor: '#D9D9D9',
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 14,
  },
  name: {
    display: 'flex',
    alignSelf: 'center',
    fontSize: 20,
    color: '#484747',
  },
  iconBox: {
    display: 'flex',
    alignSelf: 'center',
  },
  pointContainer: {
    display: 'flex',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 20,
    marginTop: 24,
  },
  pointWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pointText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#484747',
  },
  chargeButton: {
    borderRadius: 29,
    backgroundColor: '#D9D9D9',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginTop: 20,
  },
  buttonText: {
    fontsize: 13,
    fontWeight: '500',
    color: '#484747',
  },
  couponTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 21,
    // borderWidth: 1,
  },
  titleText: {
    color: '#484848',
    fontSize: 16,
    fontWeight: '600',
  },
  couponDetailWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 9,
  },
  couponDetailIconBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  couponContainer: {
    display: 'flex',
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginTop: 8,
  },
  row: {
    flexDirection: 'row', // 가로 방향으로 배치
    justifyContent: 'space-between', // 아이템 간의 간격을 균등하게 조정
  },
  helpContainer: {
    marginTop: 20,
    flex: 1,
    // paddingHorizontal: 31,
    // borderWidth: 1,
  },
  helpTitle: {
    // borderWidth: 1,
    // paddingVertical: 20,
    marginBottom: 12,
  },
  helpTitleText: {
    color: '#484848',
    fontSize: 16,
    fontWeight: '600',
  },
  helpMenuContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    // borderWidth: 1,
  },
  helpMenuWrapper: {
    display: 'flex',
    flex: 1,
    // borderWidth: 1,
    gap: 8,
  },
  helpMenuText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#12121299',
  },
});

export default styles;
