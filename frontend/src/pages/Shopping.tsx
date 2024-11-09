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
    Menu : string,
    Option: number,
    Count : number,
    Price : number,
}


export default function Shopping({ navigation }: NavigationProp): React.JSX.Element {
    const menuImg = require('../assets/menu_title.png');
    const [orderMenu, setOrderMenu] = useState<OrderItem[]>([]);
    const price = 7000;
    const name = "제육볶음";

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
        console.log("Updated Cart Items:", JSON.stringify(updatedMenu, null, 2)); // 업데이트된 장바구니 정보 확인
    };
    
    function deleteCartItems(index: number) {
        setOrderMenu(prevMenu => {
            const newMenu = prevMenu.filter((_,i) => i !== index);
            updateCartItems(newMenu);
            return newMenu;
        })
    }

    
    const totalPrice = orderMenu.reduce((total, item) => {
        const itemPrice = typeof item.Price === 'number' ? item.Price : 0; // Price 유효성 체크
        return total + itemPrice; // Count를 곱하지 않음
    }, 0);

    function handleMinus(index: number) {
        setOrderMenu(prevMenu => {
            const newMenu = [...prevMenu];
            if (newMenu[index].Count > 1) {
                newMenu[index].Count--;
                newMenu[index].Price = (newMenu[index].Price / (newMenu[index].Count + 1)) * newMenu[index].Count; // 가격 재계산
            }
            updateCartItems(newMenu);
            return newMenu;
        });
    }

    function handlePlus(index: number) {
        setOrderMenu(prevMenu => {
            const newMenu = [...prevMenu];
            newMenu[index].Count++;
            newMenu[index].Price = (newMenu[index].Price / (newMenu[index].Count - 1)) * newMenu[index].Count; // 가격 재계산
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
                                    <Text style={styles.menuName}>{name}</Text>
                                    <Text style={styles.menuPrice}>{formatPrice(price)}원</Text>
                                    <View style={styles.count}>
                                        <TouchableOpacity style={styles.countIcon} onPress={() => handleMinus(index)}>
                                            <Minus />
                                        </TouchableOpacity>
                                        <Text style={styles.countText}>{item.Count}</Text>
                                        <TouchableOpacity style={styles.countIcon} onPress={() => handlePlus(index)}>
                                            <Plus />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.menuImg}>
                                    <Image source={menuImg} style={{height : '100%', width: '100%'}}/>
                                </View>
                                <TouchableOpacity style={styles.cancel} onPress={() => deleteCartItems(index)}>
                                    <Cancel />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
            <BottomButton name={`${formatPrice(totalPrice)}원 담기`} onPress={handlePayPage} checked={orderMenu.length > 0} color="#EC424C"/>
        </SafeAreaView>
    );
}
