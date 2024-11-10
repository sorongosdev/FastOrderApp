import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  storeNameWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  storeName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2A2A2C',
  },
  storeType: {
    alignSelf: 'flex-end',
    color: 'rgba(42, 42, 44, 0.50)',
    fontWeight: '500',
    fontSize: 12,
  },
  statusWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  businessStatus: {
    fontSize: 14,
    color: 'rgba(42, 42, 44, 0.80)',
    fontWeight: '500',
  },
  orderStatus: {
    color: 'rgba(42, 42, 44, 0.50)',
    fontSize: 10,
    fontWeight: '500',
    alignSelf: 'center',
  },
  imgScrollView: {
    marginTop: 9,
    gap: 5,
  },
  menuImg: {
    backgroundColor: '#2A2A2C',
    width: 103,
    height: 103,
    borderRadius: 5,
  },
});
export default styles;
