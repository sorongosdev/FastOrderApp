import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  coupon: {
    height: 71,
    width: '48%',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
  },
  couponLeftContainer: {
    flex: 1,
    width: 48,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  storeImg: {
    width: 33,
    height: 33,
    borderRadius: 20,
    overflow: 'hidden',
  },
  couponRightContainer: {
    flex: 2,
  },
  couponRightImg: {
    flex: 1,
    padding: 8,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  dim: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%',
  },
  couponContentContainer: {
    position: 'absolute',
    padding: 8,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  },
  couponStoreName: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  couponBottomWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
  },
  couponInfoWrapper: {
    display: 'flex',
    gap: 2,
  },
  couponCount: {
    fontSize: 8,
    fontWeight: '500',
    color: 'white',
  },
  couponDescription: {
    fontSize: 5,
    fontWeight: '400',
    color: 'white',
  },
});

export default styles;
