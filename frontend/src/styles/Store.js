import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container : {
      flexGrow : 1,
      backgroundColor : '#FFF'
    },
    wrap: {
      width : '100%',
    },

    infoBox: {
      width: '100%',
      marginTop: 23,
      marginLeft: 26.5,
      marginBottom : '10%',
    },
    infoText: {
      flexDirection: 'row',
      width : '100%'
    },
    infoWaitTime : {
      marginLeft : '5%',
      marginTop : '3%',
      marginBottom : '1.5%'
    },
    minTime : {
      color: "#222",
      fontSize: 14,
      fontWeight: "500",
      fontStyle: "normal",
    },
    maxTime : {
      color: "#222",
      fontSize: 14,
      fontWeight: "500",
      fontStyle: "normal",
      marginLeft : '21%'
    },
    storeName: {
      color: '#222',
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: '600',
    },
    storeMainMenu: {
      color: 'rgba(34, 34, 34, 0.50)',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '500',
      marginLeft: 9,
      marginTop : '0.5%'
    },
    likeImg : {
        marginLeft : '43%',
        marginTop : '-1%'
    },
    locationImg : {
      marginTop : '4.7%'
    },
    storeAddress: {
      color: '#222',
      fontSize: 16,
      fontStyle: 'normal',
      marginTop: 17,
      marginLeft : '1.5%'
    },
    clockImg : {
      marginTop : '3.3%',
      marginLeft : '0.3%'
    },
    storeOpen: {
      marginTop: 10,
      color: '#222',
      fontSize: 16,
      fontStyle: 'normal',
      marginLeft : '1.5%'
    },
    storeFastOrder: {
      color: '#rgba(34, 34, 34, 0.50)',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '500',
      marginTop: '2.6%',
    },
    phoneImg : {
      marginTop : '2.8%'
    },  
    storePhoneNumber: {
      color: '#222',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '500',
      marginTop: 7,
      marginLeft : '1.5%'
    },
    storeMapText: {
      color: '#464646',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '600',
    },
    MapWrap: {
      width: '92%',
      alignItems: 'center',
      marginTop: 24,
    },
    padding: {
      width: '100%',
      height: 10,
      backgroundColor: 'rgba(218, 218, 218, 0.25)'
    },
    menuWrap : {
    },
    menu: {
      width: '100%',
      height: width * 0.3,
      borderWidth: 1,
      borderTopWidth: 0,
      borderColor: '#DFDFDF',
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-between'
    },
    menuImg : {
      borderWidth: 1,
      width: width * 0.15,
      height: width * 0.15,
      borderColor: '#DFDFDF',
      marginLeft : '3%',
      marginRight : '6%',
      borderRadius : 5,
      backgroundColor : '#D9D9D9'
    },
    menuBox : {
      justifyContent : 'center',
    },
    menuName: {
      color : '#484747',
      fontSize : 18,
      fontStyle : 'normal',
      fontWeight : '600',
      marginLeft : '20%',
      textAlign : 'left'

    },
    menuPrice: {
      color : '#484747',
      fontSize : 16,
      fontStyle : 'normal',
      fontWeight : '500',
      marginLeft : '20%',
      marginTop: '12%',
      textAlign : 'left'
    },
  });
  

export default styles;