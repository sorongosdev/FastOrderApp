import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrap: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '15%',
        paddingBottom: '45%', // 필요에 따라 조정
    },
    mainText: {
        color: '#484747',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '600',
        marginBottom: '5%',
    },
    storeName: {
        marginTop: 23,
        color: '#484747',
        fontSize: 18,
        marginRight: '33%',
        fontStyle: 'normal',
        fontWeight: '600',
        marginBottom: 17
    },
    padding: {
        width: '100%',
        height: 10,
        backgroundColor: '#D9D9D9',
    },
    orderMenu: {
        width: '80%',
        height: '24%',
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5
    },
    menuName: {
        color: '#484747',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '600',
        paddingLeft: '6%',
        paddingTop: '6%',
    },
    menuPrice: {
        color: '#484747',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        paddingLeft: '6%',
        marginTop: 10
    },
    count: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 5,
        width: 73,
        height: 20,
        marginTop: 31,
        marginLeft: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12
    },
    countText: {
        color: '#484747',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    togetherText: {
        color: '#484747',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        marginRight: '52%',
        marginTop: 18,
        marginBottom: 9
    },
    otherMenuImg: {
        height: 51,
        width: 51,
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        marginTop: 16,
        marginLeft: 19
    },
    otherMenu: {
        width: '80%',
        height: 83,
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5,
        flexDirection: 'row'
    },
    otherMenuName: {
        color: '#484747',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        marginTop: 20,
        marginLeft: 10
    },
    otherMenuPrice: {
        color: '#484747',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        marginTop: '5%',
        marginLeft: 10
    },
    orderButton: {
        width: '100%',
        height: 74,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    storeMapText: {
        color: '#464646',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '600',
    },
    shoppingOrderWrap: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute', // 절대 위치로 설정
        bottom: 0, // 화면 하단에 고정
    },
});

export default styles;