import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrap: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    input: {
      height: 56,
      width: 326,
      borderColor: '#B5B5B5',
      borderWidth: 1,
      marginTop: 9,
      paddingLeft: 21,
    },
    button: {
      height: 56,
      width: 326,
      backgroundColor: '#D9D9D9',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#939393',
      fontSize: 18,
      fontWeight: 'normal',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: 320,
      marginTop: 14,
    },
    checkboxText: {
      color: '#AAA',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
    },
    bottomTextLine: {
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
