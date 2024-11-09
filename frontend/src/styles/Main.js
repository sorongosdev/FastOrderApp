import {StyleSheet} from 'react-native';
import {HOME} from '../consts/BottomSheetConsts';

const SEARCHBAR_HEIGHT = HOME.SEARCHBAR_HEIGHT;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    fontSize: 30,
    marginTop: 30,
  },
  searchBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    paddingTop: 5.7,
    paddingHorizontal: 25,
    paddingBottom: 12.1,
    width: '100%',
    height: SEARCHBAR_HEIGHT,
    backgroundColor: '#fff',
  },
  searchBarWrapper: {
    display: 'flex',
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 6,
  },
  input: {
    height: 42,
    backgroundColor: '#E0E0E0',
    flex: 1,
  },
  buttonGroup: {
    gap: 6,
  },
  chip: {
    paddingVertical: 3,
    paddingHorizontal: 9,
    borderRadius: 44,
  },
  chipContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  iconBox: {
    width: 16,
    height: 16,
    backgroundColor: '#9A9A9A',
  },
});

export default styles;
