import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({  
    container : {
        flexGrow : 1,
        backgroundColor : '#FFF'
    },
    wrap : {
        width : '100%',
        height : '100%',
        alignItems : 'center'
    },
    padding: {
        width: '100%',
        height: 10,
        backgroundColor: 'rgba(218, 218, 218, 0.25)'
    },
    lableText : {
        color : '#484747',
        fontSize : 16,
        fontStyle : 'normal',
        fontWeight : '600',
        marginTop : '5%'
    },
    inputText : {
        color : '#1B1B1B',
        fontSize : 14,
        fontStyle : 'normal',
        fontWeight : '400'
    },
    cancelInfoText : {
        color : 'rgba(72, 71, 71, 0.50)',
        fontSize : 14,
        fontStyle : 'normal',
        fontWeight : '400',
    },
    inputBox : {
        flexDirection : 'row',
        width : '100%',
        height : 49,
        borderWidth : 1,
        borderColor : '#F1F1F1',
        backgroundColor : '#FCFCFC',
        borderRadius : 5,
        alignItems : 'center',
        paddingLeft : '3%',
        marginTop : '2%',
    },
    cancelBox : {
        backgroundColor : 'rgba(42, 42, 44, 0.50)',
        borderRadius : 3.462,
        width : '22%',
        height : '50%',
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : '3%'
    },
    cancelText : {
        color: '#FFF',
        fontSize: 11.077,
        fontStyle: 'normal',
        fontWeight: '600',
    },
    menuBox: {
        borderWidth: 1,
        borderColor: '#F1F1F1',
        backgroundColor : '#FCFCFC',
        borderRadius: 5,
        width: '100%',
        marginTop : '3%'
    },
    orderMenu: {
        width: '100%',
        height: width * 0.26, // 고정 높이 설정
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuName: {
        color: '#484747',
        fontSize: 18,
        fontWeight: '600',
        fontStyle : 'normal',
        marginLeft: '20%',
        marginTop : '15%',
    },
    menuPrice: {
        color: '#484747',
        fontSize: 14,
        fontWeight: '500',
        fontStyle : 'normal',
        marginLeft: '20%',
        marginTop : '5%',
    },
    menuImg: {
        borderWidth: 1,
        width: width * 0.15,
        height: width * 0.15,
        borderColor: '#DFDFDF',
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
        marginRight: '5%',
        marginTop : '5%'
    },
    withSeparator: {
        borderBottomWidth: 1,
        borderColor: '#DFDFDF',
    },
    withoutSeparator: {
        borderBottomWidth: 0, // 마지막 항목의 경우 선을 없앰
    },

})

export default styles;