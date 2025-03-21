import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {HOME} from '../consts/BottomSheetConsts';

const SEARCHBAR_HEIGHT = HOME.SEARCHBAR_HEIGHT;
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    // height: height,
    position: 'relative',
    // borderWidth: 1,
  },
  sheet: {
    // height: height - SEARCHBAR_HEIGHT,
    backgroundColor: 'white',
    borderRadius: 24,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    position: 'absolute',
    bottom: 0,
    // height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 23,
    // borderWidth: 1,
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
    backgroundColor: 'stroke: rgba(183, 183, 183, 0.50)',
    borderRadius: 3,
  },
});
export default styles;
