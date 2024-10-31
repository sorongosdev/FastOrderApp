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
        color : '#222',
        fontSize : 16,
        fontStyle : 'normal',
        fontWeight : '500',
        marginTop : '7%'
    },
    inputBox : {
        width : '100%',
        height : 49,
        backgroundColor : '#F4F4F4',
        borderRadius : 5,
        marginTop : '2%',
        alignItems : 'center',
        paddingLeft : '3%',
        flexDirection : 'row',
        position : 'relative'
    },
    mealType : {
        marginLeft : '6%',
        fontSize : 14,
        fontWeight : '400',
        fontStyle : 'normal',
        color : '#1B1B1B'
    },
    temporal : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    nextArrow : {
        position : 'absolute',
        right : '5%',
        flexDirection : 'row',
        gap : '10%',
    },
    changePeopleCount : {
        color : '#848484',
        fontSize : 14,
        fontWeight : '400',
        fontStyle : 'normal',
    },
    payInfo : {
        width : '100%',
        height : '20%',
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
        height: '50%',
        backgroundColor: '#FCFCFC',
        width: '100%', 
        paddingLeft : '10%',
        gap : '6%'
    },
    papaPoint : {
        color : '#222',
        fontSize : 14,
        fontWeight : '500',
        fontStyle : 'normal',
    },
    myPoint : {
        color : '#222',
        fontSize : 14,
        fontWeight : '400',
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
        backgroundColor: '#F4F4F4',
        height: '50%', 
        width: '100%', 
        paddingLeft : '10%',
        gap : '4%'
    },
    payPoint : {
        color : '#222',
        fontSize : 16,
        fontWeight : '500',
        fontStyle : 'normal'
    },
    remainPointText : {
        color : '#222',
        fontSize : 14,
        fontWeight : '400',
        fontStyle : 'normal'
    },
    remainPoint : {
        color : '#222',
        fontSize : 14,
        fontWeight : '400',
        fontStyle : 'normal',
        color : '#EC424C'
    },
    checkWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'flex-start',
        marginTop : '2%',
      },
      checkboxText: {
        color: '#656565',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        marginLeft : '2%'
      },
    

    //   모달 구분용
    peopleModalBackground: {
        flex: 1,
        alignItems :'center',
        justifyContent : 'center',
        backgroundColor: 'rgba(217, 217, 217, 0.8)',
    },
    peopleModalView: {
        height : width * 0.5,
        width : width * 0.6,
        backgroundColor: '#1B1B1B',
        borderRadius: 12,
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
    peopleModalTopBox : {
        width : '100%',
        height : '65%',
        alignItems : 'center', 
        justifyContent : 'center'
    },
    peopleModalText: {
        fontStyle : 'normal',
        fontSize: 16,
        fontWeight: '600',
        color : '#FFF'
    },
    peopleCountButtonText : {
        fontStyle : 'normal',
        fontSize: 16.706,
        fontWeight: '500',
        color : '#EC424C'
    },
    count: {
        marginTop : '10%',
        borderWidth: 1.5,
        borderColor: '#303030',
        borderRadius: 5,
        width: '50%',
        height: 33,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    countText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '400',
        fontStyle :'normal',
    },
    countBox : {
        height : '100%',
        justifyContent : 'center',
    },
    line : {
        width : '100%',
        height : 1,
        backgroundColor :'#626262',
        opacity : 0.3
    },
    peopleCountButton : {
        width : '100%',
        height : '30%',
        backgroundColor : '#1B1B1B',
        alignItems : 'center',
        justifyContent : 'center',
        borderBottomLeftRadius : 12,
        borderBottomRightRadius : 12
    },
});

export default styles;