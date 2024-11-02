import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {HOME} from '../consts/BottomSheetConsts';

const {height} = Dimensions.get('window');
const SEARCHBAR_HEIGHT = HOME.SEARCHBAR_HEIGHT;
const NAVIGATIONBAR_HEIGHT = HOME.NAVIGATIONBAR_HEIGHT;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: '100%',
    borderWidth: 1,
    flex: 1,
  },
  mapContainer: {
    // flex: 1,
    // height: '100%',
    flex: 1,
    // borderWidth: 1,
  },
});
export default styles;
