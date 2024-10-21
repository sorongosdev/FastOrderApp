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
    },
    mealType : {
        marginLeft : '5%'
    },
    temporal : {
        flexDirection : 'row',
    },
    nextArrow : {
        marginLeft : '75%'
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
        paddingLeft : '3%',
    }
});

export default styles;