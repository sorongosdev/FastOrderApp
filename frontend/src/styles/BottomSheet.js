import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  sheet: {
    height: 800,
    backgroundColor: '#BCBCBC',
    borderRadius: 24,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 21,
    paddingHorizontal: 23,
  },
  handleBox: {
    display: 'flex',
    alignItems: 'center',
  },
  handle: {
    height: 5,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 3,
    marginBottom: 5,
  },
});
export default styles;
