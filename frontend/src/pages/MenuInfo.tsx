import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { NavigationProp } from '../navigation/NavigationProps';


export default function MenuInfo({ navigation }: NavigationProp):React.JSX.Element {
    const [text, setText] = useState<string>('');

    function handlerText(Request : string) {
        setText(Request)
    }
    function handleOrder() {
        console.log(text);
        navigation.navigate('Shopping');
    }
    return (
    <View style={styles.wrap}>
        <View style={styles.storeImg}></View>
        <View style={styles.storeInfo}>
                <Text style={styles.menuName}>제육볶음</Text>
                {/* svg 아이콘 들어갈 자리 */}
                <View style={styles.InfoPrice}>
                    <Text style={styles.price}>가격</Text>
                    <Text style={styles.price}>7,000원</Text>
                </View>
        </View>

        <View style={styles.padding}></View>

        <View>
            <Text style={styles.storeRequestText}>가게 요청사항</Text>
            <TextInput
                style={styles.input}
                placeholder="요청 입력"
                placeholderTextColor="#484747"
                onChangeText={handlerText}
            />
        </View>

        <View style={styles.OrderButtonWrap}>
          <TouchableOpacity style={styles.OrderButton} onPress={handleOrder}>
            <Text style={styles.OrderButtonText}>주문하기</Text>
          </TouchableOpacity>
        </View>
    </View>
    )
}   

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
})