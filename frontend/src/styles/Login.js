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
      alignItems: 'center',
      justifyContent : 'center',
    },  
    titleWrap : {
      gap : '10%',
      marginBottom : '10%',
      alignItems : 'center'
    },
    title : {
      color: 'var(--Labels-Primary, #000)',
      fontSize : 32,
      fontStyle : 'normal',
      fontWeight : '600',
    },
    semiTitle : {
      color: 'var(--Labels-Primary, #000)',
      fontSize : 15,
      fontStyle : 'normal',
      fontWeight : '500',
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
      backgroundColor: '#1B1B1B',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFF',
      fontFamily: 'Pretendard',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: '600',
    },
    checkWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 320,
      marginTop: 14,
      marginBottom : 14,
      marginRight : '47%'
    },
    
    checkboxText: {
      color: '#AAA',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
      marginLeft : '2%',
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
