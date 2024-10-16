import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginTop: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 42,
    backgroundColor: '#E0E0E0',
  },
  searchBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    paddingTop: 5.7,
    paddingHorizontal: 25,
    paddingBottom: 15,
    width: '100%',
    backgroundColor: '#fff',
  },
  buttonGroup: {
    display: 'flex',
    gap: 5,
    flexDirection: 'row',
    justifyContent: 'center',
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
  bottomSheetContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#BCBCBC',
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 21,
    paddingHorizontal: 23,
  },
  bottomGrabBox: {
    display: 'flex',
    alignItems: 'center',
  },
  bottomGrab: {
    height: 5,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 3,
    marginBottom: 5,
  },
});

export default styles;
