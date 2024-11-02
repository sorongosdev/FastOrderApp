import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {HOME} from '../consts/BottomSheetConsts';

const SEARCHBAR_HEIGHT = HOME.SEARCHBAR_HEIGHT;
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    // zIndex: 10,
    position: 'absolute',
    top: SEARCHBAR_HEIGHT,
  },
  sheet: {
    height: height - SEARCHBAR_HEIGHT,
    paddingBottom: 74,
    backgroundColor: '#BCBCBC',
    borderRadius: 24,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 23,
  },
  handleBox: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 21,
    paddingBottom: 23,
  },
  handle: {
    height: 5,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  bottomSheetTitle: {
    color: '#434343',
    fontSize: 18,
    fontWeight: '600',
    // borderWidth: 1,
  },
});
export default styles;
