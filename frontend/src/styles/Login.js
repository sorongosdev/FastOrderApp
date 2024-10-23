import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    img : {
      height: width * 0.4,
      width: width * 0.4, 
      borderWidth : 1,
      borderColor : '#D9D9D9',
      backgroundColor : '#D9D9D9',
      marginBottom : '7%'
    },  
    input: {
      height: '7%',
      width: '84%',
      borderColor: '#B5B5B5',
      borderWidth: 1,
      marginTop: 9,
      paddingLeft: 21,
      borderRadius : 50
    },
    buttonBox: {
      height: '7%',
      width: '84%',
      backgroundColor: '#D9D9D9',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#939393',
      fontSize: 18,
      fontWeight: 'normal',
    },
    checkWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 320,
      marginTop: 14,
      marginBottom : 14,
      marginRight : '52%'
    },
    checkBox : {
      height: width * 0.05,
      width: width * 0.05, 
      borderWidth: 1,
      borderColor: '#D9D9D9',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      margin : '2%',
    },
    customCheckBox: {
      height : '100%',
      width : '100%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    checkMark: {
      position: 'absolute',
      left: 4, 
      top: 3,
      borderLeftWidth: 3,
      borderBottomWidth: 3,
      borderColor: 'orange',
      transform: [{ rotate: '315deg' }], 
      height: '50%', 
      width: '60%'
    },
    checkboxText: {
      color: '#AAA',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
    },
    bottomTextWrap: {
      flexDirection: 'row',
      width: 326,
      justifyContent: 'center',
      gap: 10,
      marginTop: 26,
    },
    bottomText: {
      color: '#7F7F7F',
      textAlign: 'right',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
    },
    bottomTextSign: {
      color: '#7F7F7F',
      textAlign: 'right',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
      marginTop: 1.4,
    },
  });
  

export default styles;
