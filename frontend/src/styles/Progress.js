import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop : '10%',
    marginBottom : '5%',
    width : '100%'
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '108%',
  },
  step: {
    alignItems: 'center',
    flex: 1,
    marginTop : '5%'
  },
  active: {
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  filled: {
    backgroundColor: '#FF741E',
    borderColor: 'rgba(255, 158, 48, 1)'
  },
  transparentCircle : {
    backgroundColor: '#FF741E',
    borderColor: 'transparent'
  },
  label: {
    fontSize: 12,
    color: '#555',
    position : 'absolute',
    top : -18,
  },
  line: {
    position: 'absolute',
    top: 30,
    left: 50,
    right: 50,
    height: 2,
    backgroundColor: '#e0e0e0',
    zIndex: -2,
  },
  lineColor : {
    position: 'absolute',
    top: 30,
    left: 50,
    right: 50,
    height: 2,
    backgroundColor : '#FF741E',
    zIndex : -1
  }

  
});

export default styles;