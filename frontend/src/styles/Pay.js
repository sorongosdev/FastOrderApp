import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFF',
    },
    wrap: {
        width: '100%',
        alignItems: 'center',
    },
    padding: {
        width: '100%',
        height: 10,
        backgroundColor: 'rgba(218, 218, 218, 0.25)'
    },
    labelText : {
        color : '#484747',
        fontSize : 14,
        fontStyle : 'normal',
        fontWeight : '500',
        marginTop : '7%'
    },
    inputBox : {
        width : 325,
        height : 49,
        borderWidth : 1,
        borderColor : '#D9D9D9',
        backgroundColor : 'rgba(217, 217, 217, 0.00)',
        borderRadius : 5,
        marginTop : '2%',
        alignItems : 'center',
        paddingLeft : '3%',
        flexDirection : 'row',
        position : 'relative'
    },
    mealType : {
        marginLeft : '6%',
    },
    temporal : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    nextArrow : {
        position : 'absolute',
        right : '5%'
    },
    payInfo : {
        width : 325,
        height : 138,
        borderWidth : 1,
        borderColor : '#D9D9D9',
        backgroundColor : 'rgba(217, 217, 217, 0.00)',
        borderRadius : 5,
        marginTop : '2%',
        alignItems : 'center',
    },
    whiteBox : {
        flexDirection: 'column',
        justifyContent: 'center',
        height: '60%',
        backgroundColor: '#FFF',
        width: '100%', 
        paddingLeft : '10%',
        gap : '6%'
    },
    papaPoint : {
        color : '#484747',
        fontSize : 14,
        fontWeight : '500',
        fontStyle : 'normal'
    },
    myPoint : {
        color : '#484747',
        fontSize : 12,
        fontWeight : '500',
        fontStyle : 'normal'
    },
    textBox : {
        width : '90%',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    grayBox : {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
        height: '40%', 
        width: '100%', 
        paddingLeft : '10%',
        gap : '4%'
    },
    payPoint : {
        color : '#484747',
        fontSize : 12,
        fontWeight : '400',
        fontStyle : 'normal'
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end', 
        backgroundColor: 'rgba(217, 217, 217, 0.8)',
    },
    modalView: {
        height : '33%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTextBox : {
        marginTop : '8%',
        flexDirection : 'row',
        width : '84%',
        justifyContent : 'space-between'
    },
    modalText: {
        fontStyle : 'normal',
        fontSize: 16,
        fontWeight: '600',
        color : '#484747'
    },
    input: {
        marginTop : '5%',
        height: '20%',
        width: '84%',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius : 5,
        backgroundColor : 'rgba(217, 217, 217, 0.00)',
        paddingLeft : '4%'
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        width: '45%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
    checkWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
        marginTop: 14,
        marginBottom : 14,
        marginRight : '59%'
      },
      checkBox : {
        height: width * 0.05,
        width: width * 0.05, 
        borderWidth: 1,
        borderColor: '#B5B5B5',
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
        color: '#656565',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
      },
});

export default styles;