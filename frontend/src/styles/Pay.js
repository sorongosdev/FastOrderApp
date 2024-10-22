import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFF',
    },
    wrapper : {
        width : '80%',
        height : '8.5%',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center'
    },
    wrap: {
        width: '100%',
        alignItems: 'center',
    },
    mainText: {
        color: '#484747',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginLeft : '37%'
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
        marginLeft : '5%'
    },
    temporal : {
        flexDirection : 'row',
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
});

export default styles;