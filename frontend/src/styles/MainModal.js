import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    height: 171,
    width: '70%',
    backgroundColor: '#1B1B1B',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTextWrapper: {
    // borderWidth: 1,
    flex: 12,
    justifyContent: 'center',
  },
  modalDescriptionText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  iconBox: {
    width: 16,
    height: 16,
    position: 'absolute',
    right: 14,
    marginTop: 12,
    borderWidth: 1,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    flex: 5,
  },
  okText: {
    color: '#F55442',
    fontSize: 16,
    fontWeight: '500',
    borderWidth: 1,
  },
});

export default styles;
