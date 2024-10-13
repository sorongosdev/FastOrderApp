import React, { useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { NavigationProp } from '../navigation/NavigationProps';
import styles from "../styles/MenuInfo";

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

