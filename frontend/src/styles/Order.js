import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBarContainer: {
    width: '100%',
    height: 60,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  appBarTitle: {
    fontSize: 18,
    color: '#484747',
  },
  divder: {
    height: 10,
    backgroundColor: '#F5F5F5',
  },
  orderListContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 24 - 14.44,
    paddingLeft: 33,
    paddingRight: 17,
  },
});

export default styles;
