import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor : '#FFF'
      },
      wrap : {
        width : '100%',
        height : '100%', 
      },
      storeBox: {
        height: '15%',
        width: '100%',
        marginTop : '6%',
        marginLeft: '8%',
      },
      InfoBox : {
        width : '83%',
        flexDirection : 'row',
        justifyContent : 'space-between'
      },
      menuName : {
        color : 'var(--pont-color, #222)',
        fontSize : 20,
        fontStyle : 'normal',
        fontWeight : '600',
        marginTop : '1%',
      },
      price : {
        color : '#484747',
        fontSize : 20,
        fontStyle : 'normal',
        fontWeight : '400',
        marginTop : '10%',
      },
      padding: {
        width: '100%',
        height: 10,
        backgroundColor: 'rgba(218, 218, 218, 0.25)'
      },
      count: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 5,
        width: 85,
        height: 30,
        marginTop: 31,
        marginLeft: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        marginLeft : '9%'
      },
      countIcon : {
        width : '20%',
        height : '100%',
        alignItems : 'center',
        justifyContent : 'center'
      },
      countText: {
        color: '#484747',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
      },

});

export default styles;

