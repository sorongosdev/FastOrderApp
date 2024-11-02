import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import { NavigationProp } from '../navigation/NavigationProps';
import Plus from "../assets/icon_menu_plus.svg";
import Minus from "../assets/icon_menu_minus.svg";
import styles from "../styles/Shopping";
import BottomButton from "../components/BottomButton";
import TopTitle from "../components/TopTitle";
import { setItem, getItem } from "../components/Cart";
import Cancel from "../assets/icon_cancel.svg";

interface OrderItem {
    menuName: string;
    price: number;
    count: number;
    menuId: number; 
    TitleImg : any;
}


export default function Shopping({ navigation }: NavigationProp): React.JSX.Element {
    const menuImg = require('../assets/menu_title.png');
    const [orderMenu, setOrderMenu] = useState<OrderItem[]>([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const cartItems = await getItem('cartItems');
                console.log("Fetched Cart Items:", cartItems); // 데이터 출력
                if (cartItems) {
                    setOrderMenu(JSON.parse(cartItems));
                }
            } catch (error) {
                console.error("Failed to fetch cart items:", error);
            }
        };

        fetchCartItems();
    }, []);

    const formatPrice = (price:number) => {
        return new Intl.NumberFormat("ko-KR").format(price);
    };
    const updateCartItems = async (updatedMenu: OrderItem[]) => {
        await setItem('cartItems', JSON.stringify(updatedMenu));
        console.log("Updated Cart Items:", updatedMenu); // 업데이트된 장바구니 정보 확인
    };
    function deleteCartItems(index: number) {
        setOrderMenu(prevMenu => {
            const newMenu = prevMenu.filter((_,i) => i !== index);
            updateCartItems(newMenu);
            return newMenu;
        })
    }

    function handleMinus(index: number) {
        setOrderMenu(prevMenu => {
            const newMenu = [...prevMenu];
            if (newMenu[index].count > 0) {
                newMenu[index].count--;
            }
            updateCartItems(newMenu);
            return newMenu;
        });
    }

    function handlePlus(index: number) {
        setOrderMenu(prevMenu => {
            const newMenu = [...prevMenu];
            newMenu[index].count++;
            updateCartItems(newMenu);
            return newMenu;
        });
    }

    function handlePayPage() {
        navigation.navigate('Pay');
    }

    function handleBack() {
        navigation.goBack();
    }

    const totalPrice = orderMenu.reduce((total, item) => total + item.price * item.count, 0);

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
                                    <Text style={styles.menuName}>{item.menuName}</Text>
                                    <Text style={styles.menuPrice}>{formatPrice(item.price)}원</Text>
                                    <View style={styles.count}>
                                        <TouchableOpacity style={styles.countBox} onPress={() => handleMinus(index)}>
                                            <Minus />
                                        </TouchableOpacity>
                                        <Text style={styles.countText}>{item.count}</Text>
                                        <TouchableOpacity style={styles.countBox} onPress={() => handlePlus(index)}>
                                            <Plus />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.menuImg}>
                                    <Image source={item.TitleImg} style={{height : '100%', width: '100%'}}/>
                                </View>
                                <TouchableOpacity style={styles.cancel} onPress={() => deleteCartItems(index)}>
                                    <Cancel />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
            <BottomButton name={`${formatPrice(totalPrice)}원 주문하기`} onPress={handlePayPage} checked={true}/>
        </SafeAreaView>
    );
}
