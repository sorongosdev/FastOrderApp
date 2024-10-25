import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  divider: {
    width: '100%',
    backgroundColor: '#F5F5F5',
  },
  container: {},
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    backgroundColor: 'white',
    paddingLeft: 25,
    paddingVertical: 15,
  },
  storeName: {
    color: '#484747',
    fontSize: 18,
    fontWeight: '600',
  },
  storeCategory: {
    color: '#828282',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default styles;
