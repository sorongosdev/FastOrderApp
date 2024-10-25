import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  divider: {
    height: 10,
    backgroundColor: '#F5F5F5',
    width: '100%',
  },
  contentContainer: {
    paddingHorizontal: 25,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  profileImgBox: {
    marginTop: 24,
  },
  personalInfoContainer: {
    marginTop: 26,
    borderColor: '#D9D9D9',
    borderRadius: 15,
    borderWidth: 1,
    width: '100%',
  },
  listDivider: {
    backgroundColor: '#DFDFDF',
    height: 1,
  },
  nameWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  nameRightWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  bottomContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  bottomWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  bottomText: {
    flex: 1,
    textAlign: 'center',
    padding: 20,
  },
  bottomDivider: {
    width: 2,
    height: 18,
    backgroundColor: '#7C7C7C5C',
    alignSelf: 'center',
  },
});

export default styles;
