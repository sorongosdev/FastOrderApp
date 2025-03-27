import React from 'react';
import { View, Text } from 'react-native';
import Cart_White from '../assets/icon_cart_white.svg';
import Cart_Black from '../assets/icon_cart.svg';
import styles from '../styles/ShoppingCartIcon';
import { useAppSelector } from '../redux/hooks';

interface ShoppingCartIconProps {
    color: string;
}

export default function ShoppingCartIcon({ color }: ShoppingCartIconProps): React.JSX.Element {
    // Redux store에서 장바구니 아이템 개수 가져오기
    const cartItems = useAppSelector((state) => state.cart.items);
    const itemCount = cartItems.length;

    return (
        <View style={styles.container}>
            {
                color === 'Black' ?
                <Cart_Black width='100%' height='100%'/> :
                <Cart_White width='100%' height='100%'/>
            }
            <View style={styles.wrap}>
                <Text style={styles.text}>{itemCount}</Text>
            </View>
        </View>
    );
}