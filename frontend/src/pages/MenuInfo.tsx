import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { NavigationProp } from '../navigation/NavigationProps';
import styles from "../styles/MenuInfo";
import StoreImg from "../components/StoreImg";
import Plus from "../assets/icon_menu_plus.svg";
import Minus from "../assets/icon_menu_minus.svg";
import BottomButton from "../components/BottomButton";
import EmptyLike from "../assets/icon_empty_like.svg";
import EmptyEclips from "../assets/icon_eclips.svg";
import CheckedEclips from "../assets/icon_flavour_Eclips.svg";
import FullLike from "../assets/icon_full_like.svg";
import UncheckedBox from "../assets/icon_unchecked_box.svg";
import CheckedBox from "../assets/icon_checked_box.svg";
import { setItem, getItem } from "../components/Cart";

const OPTIONS = [
    { title: "아보카도 추가", cost: 500 },
    { title: "샤워크림 추가", cost: 700 },
    // 추후 추가할 옵션은 여기 배열에 추가
];

export default function MenuInfo({ navigation }: NavigationProp): React.JSX.Element {
    const [count, setCount] = useState(0);
    const [likeChecked, setLikeChecked] = useState<boolean>(false);
    const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: boolean }>({});

    const TitleImg = require('../assets/jjiggajjigga_title.png');
    const basePrice = 7000; // 기본 가격
    // 총 가격 계산 함수
    const calculateTotalPrice = () => {
        const options = OPTIONS.filter(option => selectedOptions[option.title]);
        const totalOptionsCost = options.reduce((sum, option) => sum + option.cost, 0);
        return (basePrice + totalOptionsCost) *  count; // 수량에 따른 가격 추가
    };

    async function handleOrder() {
        const options = OPTIONS.filter(option => selectedOptions[option.title]);
        const menu = {
            Menu: {
                Price: basePrice,
                Title: "제윢볶음"
            },
            Count: count,
            Price: calculateTotalPrice(), // 총 가격 계산
            Option: [
                { Cost: 7000, Title: selectedFlavor },
                ...options.map(option => ({ Cost: option.cost, Title: option.title }))
            ]
        };

        const existingOrders = await getItem('cartItems');
        const orders = existingOrders ? JSON.parse(existingOrders) : [];
        orders.push(menu);
        await setItem('cartItems', JSON.stringify(orders));
        console.log("Updated Cart Items:", orders);
        navigation.navigate('Shopping');
    }

    const formatPrice = (price: number) => {
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
        navigation.navigate('Shopping');
    }

    function handleLike() {
        setLikeChecked(!likeChecked);
    }

    function handleSelectFlavor(flavor: string) {
        setSelectedFlavor(flavor);
    }

    function handleToggleOption(optionTitle: string) {
        setSelectedOptions((prev) => ({
            ...prev,
            [optionTitle]: !prev[optionTitle],
        }));
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <StoreImg onBack={handleBack} onShopping={handleMoveShopping} img={TitleImg} />
                <View style={styles.storeBox}>
                    <View style={styles.InfoBox}>
                        <Text style={styles.menuName}>제육볶음</Text>
                        <View>
                            <TouchableOpacity onPress={handleLike}>
                                {likeChecked ? <FullLike /> : <EmptyLike />}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.padding}></View>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: '5%', rowGap: '10%' }}>
                    <View style={styles.flavoursBox}>
                        <Text style={styles.price}>가격</Text>
                        <View style={styles.round}>
                            <Text>필수</Text>
                        </View>
                    </View>

                    {["순한맛", "중간맛", "매운맛"].map((flavor) => (
                        <View key={flavor} style={styles.flavoursBox}>
                            <TouchableOpacity
                                style={styles.wrapper}
                                onPress={() => handleSelectFlavor(flavor)} // 맛 선택 핸들러
                            >
                                {selectedFlavor === flavor ? <CheckedEclips /> : <EmptyEclips />}
                                <Text style={styles.flavoursPrice}>{flavor}</Text>
                            </TouchableOpacity>
                            <Text style={styles.flavoursPrice}>{`${formatPrice(7000)}원`}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.padding}></View>

                <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: '5%', rowGap: '10%' }}>
                    <View style={styles.flavoursBox}>
                        <Text style={styles.price}>가격</Text>
                        <View style={styles.detailRound}>
                            <Text>선택</Text>
                        </View>
                    </View>
                    {OPTIONS.map((option) => (
                        <View key={option.title} style={styles.flavoursBox}>
                            <TouchableOpacity
                                style={styles.wrapper}
                                onPress={() => handleToggleOption(option.title)}
                            >
                                {selectedOptions[option.title] ? <CheckedBox /> : <UncheckedBox />}
                                <Text style={styles.flavoursPrice}>{option.title}</Text>
                            </TouchableOpacity>
                            <Text style={styles.flavoursPrice}>{`${formatPrice(option.cost)}원`}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.padding}></View>

                <View style={styles.countBox}>
                    <Text style={styles.countText}>수량</Text>
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
            </View>
            <BottomButton name={`${formatPrice(calculateTotalPrice())} 주문하기`} onPress={handleOrder} checked={count > 0 && selectedFlavor != null} color="#EC424C" />
        </SafeAreaView>
    );
}




    // const BASE_URL = "http://money.ipdisk.co.kr:58200/";


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