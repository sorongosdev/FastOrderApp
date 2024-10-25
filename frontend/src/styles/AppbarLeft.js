import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 16.7,
  },
  leftContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 12,
  },
  title: {
    fontSize: 18,
    color: '#484747',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'center',
  },
  rightContainer: {
    width: 12,
    height: 24,
  },
});

export default styles;
