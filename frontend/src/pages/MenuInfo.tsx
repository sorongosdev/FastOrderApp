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

// const BASE_URL = "http://3.39.26.152:8000";



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

    // const handleSignup = async () => { //메뉴 id 찜 넘겨줄 겁니다.
    //     if (email && password && name && phone && username) {
    //       try {
    //         const response = await axios.post(`${BASE_URL}/api/users/`, {
    //           email : email,
    //           password : password,
    //           name : name,
    //           phone : phone,
    //           username : username,
    //           subscribed:  clickAgreement === 1// 동의 여부
    //         });
            
    //         // 회원가입 성공 시 페이지 이동
    //         navigate('/login'); // 성공적으로 가입한 후 메인 페이지로 이동
    //       } catch (error) {
    //         console.log("Error during signup:");
    //       }
    //     }
    //   };

    async function handleOrder() {
        const menuName = '제육볶음';
        const price = 7000; 
        const menuId = 1; // 예시로 메뉴 ID를 1로 설정, 실제 ID로 변경 필요

        // 기존 장바구니 정보를 가져오기
        const existingOrders = await getItem('cartItems'); // 'cartItems'에서 기존 장바구니 정보 가져오기
        const orders = existingOrders ? JSON.parse(existingOrders) : []; // 기존 정보가 있으면 파싱, 없으면 빈 배열

        // 새로운 메뉴 항목 추가
        orders.push({
            menuName,
            price,
            count,
            menuId,
            TitleImg
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
    return (
    <SafeAreaView style={styles.container}>
        <View style = {styles.wrap}>
            <StoreImg onBack={handleBack} onShopping={handleMoveShopping} img={TitleImg}/>
            <View style={styles.storeBox}>
                    <View style={styles.InfoBox}>
                        <Text style={styles.menuName}>제육볶음</Text>
                        <View>
                        { likeChecked ?
                            <TouchableOpacity onPress={() => setLikeChecked(false)}>
                            <FullLike />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => setLikeChecked(true)}>
                            <EmptyLike />
                            </TouchableOpacity>
                        }
                        </View>
                    </View>
                    <View style={styles.InfoBox}>
                        <Text style={styles.price}>가격</Text>
                        <Text style={styles.price}>{`${formatPrice(7000)}원`}</Text>
                    </View>
            </View>

            <View style={styles.padding}></View>

            <View style={styles.count}>
                <TouchableOpacity onPress={handleMinus}>
                    <Minus />
                </TouchableOpacity>
                <Text style={styles.countText}>{count}</Text>
                <TouchableOpacity onPress={handlePlus}>
                    <Plus />    
                </TouchableOpacity>
            </View>
        </View>
        <BottomButton name="주문하기" onPress={handleOrder} checked={count > 0}/>
    </SafeAreaView>
    )
}   