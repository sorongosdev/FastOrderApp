import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import { NavigationProp } from '../navigation/NavigationProps';
import Plus from "../assets/icon_menu_plus.svg";
import Minus from "../assets/icon_menu_minus.svg";
import { BASE_URL } from "../consts/Url";
import styles from "../styles/Shopping";
import BottomButton from "../components/BottomButton";
import TopTitle from "../components/TopTitle";
import Cancel from "../assets/icon_cancel.svg";
import axios from "axios";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeFromCart, updateQuantity, CartItem } from '../redux/slices/cartSlice';

export default function Shopping({ navigation }: NavigationProp): React.JSX.Element {
    const dispatch = useAppDispatch();
    const { items: orderMenu, storeId } = useAppSelector((state) => state.cart);
    const { token } = useAppSelector((state) => state.user);
    const [storeTitle, setStoreTitle] = useState<string>('');

    useEffect(() => {
        const getStoreInfo = async () => {
            if (storeId) {
                try {
                    const response = await axios.get(`${BASE_URL}/stores/id/${storeId}?token=${token}`);
                    setStoreTitle(response.data.store_data.store_name);
                } catch (error) {
                    console.error("Error fetching store info:", error);
                }
            } else {
                setStoreTitle('');
            }
        };

        getStoreInfo();
    }, [storeId, token]);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("ko-KR").format(price);
    };

    function deleteCartItems(index: number) {
        dispatch(removeFromCart(index));
    }

    const totalPrice = orderMenu.reduce((total: number, item: CartItem) => {
        const itemPrice = typeof item.Price === 'number' ? item.Price : 0;
        return total + itemPrice;
    }, 0);

    function handleMinus(index: number) {
        if (orderMenu[index].Count > 1) {
            dispatch(updateQuantity({ index, count: orderMenu[index].Count - 1 }));
        }
    }

    function handlePlus(index: number) {
        dispatch(updateQuantity({ index, count: orderMenu[index].Count + 1 }));
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
                    <Text style={styles.storeName}>{storeTitle !== '' ? storeTitle : ''}</Text>
                    <View style={styles.menuBox}>
                        {orderMenu.map((item: CartItem, index: number) => (
                            <View
                                key={index}
                                style={[
                                    styles.orderMenu,
                                    index < orderMenu.length - 1 ? styles.withSeparator : styles.withoutSeparator
                                ]}
                            >
                                <View>
                                    <Text style={styles.menuName}>{item.Menu.Title}</Text>
                                    <Text style={styles.menuDetails}>{`가격 : 1인분 (${formatPrice(item.Menu.Price)}원)`}</Text>
                                    <Text style={styles.menuPrice}>{formatPrice(item.Price)}원</Text>
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
                                    <Image source={{ uri: item.Menu.image }} style={{ height: '100%', width: '100%' }} />
                                </View>
                                <TouchableOpacity style={styles.cancel} onPress={() => deleteCartItems(index)}>
                                    <Cancel />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
            <BottomButton
                name={`${formatPrice(totalPrice)}원 담기`}
                onPress={handlePayPage}
                checked={orderMenu.length > 0}
                color="#EC424C"
            />
        </SafeAreaView>
    );
}