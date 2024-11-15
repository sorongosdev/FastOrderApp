import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Cart_White from '../assets/icon_cart_white.svg';
import Cart_Black from '../assets/icon_cart.svg';
import styles from '../styles/ShoppingCartIcon';
import { getItem } from './Cart';

interface ShoppingCartIconProps {
    color: string;
}

interface OrderItem {
    menuName: string;
    price: number;
    count: number;
    menuId: number; 
    TitleImg : any;
}



export default function ShoppingCartIcon({color}:ShoppingCartIconProps):React.JSX.Element {

    const [orderMenu, setOrderMenu] = useState<OrderItem[]>([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const cartItems = await getItem('cartItems');
                if (cartItems) {
                    setOrderMenu(JSON.parse(cartItems));
                }
            } catch (error) {
                console.error("Failed to fetch cart items:", error);
            }
        };

        fetchCartItems();
    }, [orderMenu]);

    return(
        <View style={styles.container}>
            {
                color === 'Black' ?
                <Cart_Black width='100%' height='100%'/> :
                <Cart_White width='100%' height='100%'/>
            }
            <View style={styles.wrap}>
                <Text style={styles.text}>{orderMenu.length}</Text>
            </View>
        </View>
    );
}
