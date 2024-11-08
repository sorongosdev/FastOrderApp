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
    storeName: {
        marginTop: 23,
        color: 'var(--pont-color, #222)',
        fontSize: 18,
        fontWeight: '600',
        fontStyle : 'normal',
        marginBottom: 17,
        width : '79%'
    },
    padding: {
        width: '100%',
        height: 10,
        backgroundColor: 'rgba(218, 218, 218, 0.25)'
    },
    menuBox: {
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 5,
        width: '80%',
    },
    orderMenu: {
        width: '100%',
        height: width * 0.33, // 고정 높이 설정
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuName: {
        color: 'var(--pont-color, #222)',
        fontSize: 18,
        fontWeight: '600',
        fontStyle : 'normal',
        marginLeft: '20%',
        marginTop : '15%',
    },
    menuPrice: {
        color: 'rgba(34, 34, 34, 0.80)',
        fontSize: 16,
        fontWeight: '400',
        fontStyle : 'normal',
        marginLeft: '20%',
        marginTop : '5%',
    },
    count: {
        marginTop : '12%',
        marginLeft : '20%',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 5,
        width: 89.1,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
    countIcon : {
        width : '20%',
        height : '100%',
        alignItems : 'center',
        justifyContent : 'center'
    },
    countText: {
        color: '#484747',
        fontSize: 17.824,
        fontWeight: '500',
        fontStyle : 'normal',
    },
    menuImg: {
        borderWidth: 1,
        width: width * 0.18,
        height: width * 0.18,
        borderColor: '#DFDFDF',
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
        marginRight : '-12%',
        marginTop : '10%'
    },
    withSeparator: {
        borderBottomWidth: 1,
        borderColor: '#DFDFDF',
    },
    withoutSeparator: {
        borderBottomWidth: 0, // 마지막 항목의 경우 선을 없앰
    },
    cancel : {
        marginRight : '3%',
        marginTop : '3%'
    }
});

export default styles;