import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import { NavigationProp } from '../navigation/NavigationProps';
import styles from "../styles/MenuInfo";
import StoreImg from "../components/StoreImg";
import Plus from "../assets/icon_menu_plus.svg";
import Minus from "../assets/icon_menu_minus.svg";
import BottomButton from "../components/BottomButton";
import EmptyLike from "../assets/icon_empty_like.svg";
import FullLike from "../assets/icon_full_like.svg";
import { setItem, getItem } from "../components/Cart";

// const BASE_URL = "http://money.ipdisk.co.kr:58200/";



export default function MenuInfo({ navigation }: NavigationProp):React.JSX.Element {
    const [count, setCount] = useState(0);
    const [likeChecked, setLikeChecked] = useState<boolean>(false);
    const TitleImg = require('../assets/jjiggajjigga_title.png'); // require로 임포트
    

    // const rankingGet = async () => {
    //     try {
    //         const response = await axios.get(`${BASE_URL}/api/galleries/ranking?type=사진&category=반려동물`);
    //         // 응답이 배열인지 확인하고 설정
    //         if (Array.isArray(response.data)) {
    //             setRanking(response.data); // 배열로 설정
    //             console.log(response.data);
    //         } else {
    //             console.error("응답이 배열이 아닙니다:", response.data);
    //         }

    //     } catch (error) {
    //         console.error("Error fetching posts:", error);
    //     }
    // };

    async function handleOrder() {
        const menuId = 23; // 메뉴 ID를 23으로 설정
        const details = [3, 5, 11]; // 세부 옵션 ID 배열
        const quantity = count; // 수량
    

        // 기존 장바구니 정보를 가져오기
        const existingOrders = await getItem('cartItems'); // 'cartItems'에서 기존 장바구니 정보 가져오기
        const orders = existingOrders ? JSON.parse(existingOrders) : []; // 기존 정보가 있으면 파싱, 없으면 빈 배열

        // 새로운 메뉴 항목 추가
        orders.push({
            menu : menuId,
            details: details,
            quantity: quantity,
        });
    

        // 장바구니 정보 업데이트
        await setItem('cartItems', JSON.stringify(orders));

        console.log("Updated Cart Items:", orders); // 업데이트된 장바구니 정보 확인
        navigation.navigate('Shopping')
    }

    const formatPrice = (price:number) => {
        return new Intl.NumberFormat("ko-KR").format(price);
    };

    function handleMinus() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    function handlePlus() {
        setCount(count + 1);
    }

    function handleBack() {
        navigation.goBack();
    }
    function handleMoveShopping() {
        navigation.navigate('Shopping')
    }
    function handleLike() {
        setLikeChecked(!likeChecked);
        // const StoreLike = async () => {  //메뉴 아이디 넘겨줄 겁니다.
        //     if (likeChecked) {
        //       try {
        //         const response = await axios.post(`${BASE_URL}/api/users/`, {
        //           menu_id = menu_id;
        //         });
        //       } catch (error) {
        //         console.log("Error during Menu Like");
        //       }
        //     }
        //   };
      }
    return (
    <SafeAreaView style={styles.container}>
        <View style = {styles.wrap}>
            <StoreImg onBack={handleBack} onShopping={handleMoveShopping} img={TitleImg}/>
            <View style={styles.storeBox}>
                    <View style={styles.InfoBox}>
                        <Text style={styles.menuName}>제육볶음</Text>
                        <View>
                        <TouchableOpacity onPress={handleLike}>
                            { likeChecked ?  <FullLike /> : <EmptyLike /> }
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.InfoBox}>
                        <Text style={styles.price}>가격</Text>
                        <Text style={styles.price}>{`${formatPrice(7000)}원`}</Text>
                    </View>
            </View>

            <View style={styles.padding}></View>

            <View style={styles.count}>
                <TouchableOpacity style={styles.countIcon} onPress={handleMinus}>
                    <Minus />
                </TouchableOpacity>
                <Text style={styles.countText}>{count}</Text>
                <TouchableOpacity style={styles.countIcon} onPress={handlePlus}>
                    <Plus />    
                </TouchableOpacity>
            </View>
        </View>
        <BottomButton name="주문하기" onPress={handleOrder} checked={count > 0} color="#EC424C"/>
    </SafeAreaView>
    )
}   