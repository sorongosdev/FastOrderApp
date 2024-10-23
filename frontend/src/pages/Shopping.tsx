import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { NavigationProp } from '../navigation/NavigationProps';
import styles from "../styles/Shopping";
import BackArrow from '../assets/icon_back_arrow.svg';
import BottomButton from "../components/BottomButton";
import TopTitle from "../components/TopTitle";

export default function Shopping({ navigation }: NavigationProp): React.JSX.Element {
    const [orderMenu, setOrderMenu] = useState([
        { name: '제육볶음', price: '7,000원', img: '', count: 0 },
        { name: '김치찌개', price: '6,500원', img: '', count: 0 },
        { name: '된장찌개', price: '6,000원', img: '', count: 0 }
    ]);

    function handleMinus(index : number) {
        setOrderMenu(prevMenu => {
            const newMenu = [...prevMenu];
            if (newMenu[index].count > 0) {
                newMenu[index].count--;
            }
            return newMenu;
        });
    }
    
    function handlePlus(index : number) {
        setOrderMenu(prevMenu => {
            const newMenu = [...prevMenu];
            newMenu[index].count++;
            return newMenu;
        });
    }

    function handlePayPage() {
        navigation.navigate('Pay');
    }

    function handleBack() {
        navigation.navigate('Store');
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.wrap}>
                    <TopTitle name="장바구니" onPress={handleBack} />
                    <View style={styles.padding}></View>
                    <Text style={styles.storeName}>찌개찌개 한양대 에리카 점</Text>
                    <View style={styles.menuBox}>
                        {orderMenu.map((item, index) => (
                            <View 
                                key={index} 
                                style={[
                                    styles.orderMenu, 
                                    index < orderMenu.length - 1 ? styles.withSeparator : styles.withoutSeparator
                                ]}
                            >
                                <View>
                                    <Text style={styles.menuName}>{item.name}</Text>
                                    <Text style={styles.menuPrice}>{item.price}</Text>
                                    <View style={styles.count}>
                                        <TouchableOpacity onPress={() => handleMinus(index)}>
                                            <Text style={styles.countText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.countText}>{item.count}</Text>
                                        <TouchableOpacity onPress={() => handlePlus(index)}>
                                            <Text style={styles.countText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.menuImg}></View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
            <BottomButton name="28,000원 주문하기" onPress={handlePayPage}/>
        </SafeAreaView>
    );
}