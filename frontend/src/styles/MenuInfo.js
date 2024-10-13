import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    wrap: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '0%',
        paddingBottom : '49%'
      },
      storeImg: {
        height: 157,
        width: '100%',
        backgroundColor: '#D9D9D9',
      },
      InfoPrice : {
        flexDirection : 'row'
      },
      menuName : {
        color : '#484747',
        fontSize : 20,
        fontStyle : 'normal',
        fontWeight : '600',
        marginTop : '1%'
      },
      price : {
        width : '70%',
        color : '#484747',
        fontSize : 17,
        fontStyle : 'normal',
        fontWeight : '600',
        marginTop : '10%',
        justifyContent : 'flex-end'
      },
      padding: {
        width: '100%',
        height: 10,
        backgroundColor: '#D9D9D9',
      },
      storeInfo: {
        height: '16%',
        width: '100%',
        marginTop: 23,
        marginLeft: '13%',
      },
      input: {
        height: 49,
        width: 325,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius : 5,
        backgroundColor : 'rgb(217,217,217, 0.00)',
        paddingLeft : 14
      },
      storeRequestText :{
        color : '#484747',
        fontSize : 14,
        fontWeight : '500',
        fontStyle : 'normal',
        marginTop : 14,
        marginBottom : '2%',
        marginLeft : '1.5%'
      },
      OrderButtonWrap: {
        width: '100%',
        alignItems: 'center',
        justifyContent : 'flex-end',
        marginTop: '80%',
      },
      OrderButton: {
        width: 325,
        height: 51,
        borderRadius: 50,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      OrderButtonText: {
        color: '#484747',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '600',
      },
});

export default styles;

