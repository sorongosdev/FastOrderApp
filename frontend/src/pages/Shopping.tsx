import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationProp } from '../navigation/NavigationProps';
import { ScrollView } from "react-native-gesture-handler";
import styles from "../styles/Shopping";

export default function Shopping({ navigation }: NavigationProp): React.JSX.Element {
    const [count, setCount] = useState(0);
    const orderMenu = [
        { name: '제육볶음', price: '7,000원', img: '', remaining: '' },
        { name: '제육볶음', price: '7,000원', img: '', remaining: '' }
    ];
    const otherMenu = [
        { name: '제육볶음', price: '7,000원', img: '' },
        { name: '제육볶음', price: '7,000원', img: '' }
    ];

    function handleMinus() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    function handlePlus() {
        setCount(count + 1);
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.wrap}>
                {/* 꺽새 이미지 */}
                <Text style={styles.mainText}>장바구니</Text>

                <View style={styles.padding}></View>

                <Text style={styles.storeName}>찌개찌개 한양대 에리카 점</Text>

                {orderMenu.map((item, index) => (
                    <View key={index} style={styles.orderMenu}>
                        <Text style={styles.menuName}>{item.name}</Text>
                        <Text style={styles.menuPrice}>{item.price}</Text>
                        <View style={styles.count}>
                            <Text style={styles.countText} onPress={handleMinus}>-</Text>
                            <Text style={styles.countText}>{count}</Text>
                            <Text style={styles.countText} onPress={handlePlus}>+</Text>
                        </View>
                    </View>
                ))}

                <Text style={styles.togetherText}>함께 먹으면 좋아요</Text>

                {otherMenu.map((item, index) => (
                    <View key={index} style={styles.otherMenu}>
                        <View style={styles.otherMenuImg}></View>
                        <View>
                            <Text style={styles.otherMenuName}>{item.name}</Text>
                            <Text style={styles.otherMenuPrice}>{item.price}</Text>
                        </View>
                        {/* + button */}
                    </View>
                ))}
            </ScrollView>
            <View style={styles.shoppingOrderWrap}>
                <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.storeMapText}>28,000원 주문하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

