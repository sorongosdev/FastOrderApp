import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { NavigationProp, RouteProp } from '../navigation/NavigationProps';
import axios from "axios";
import styles from "../styles/MenuInfo";
import StoreImg from "../components/StoreImg";
import Plus from "../assets/icon_menu_plus.svg";
import Minus from "../assets/icon_menu_minus.svg";
import BottomButton from "../components/BottomButton";
import EmptyLike from "../assets/icon_empty_like.svg";
import FullLike from "../assets/icon_full_like.svg";
import CheckedEclips from "../assets/icon_checked_eclips.svg";
import EmptyEclips from "../assets/icon_eclips.svg";
import UncheckedBox from "../assets/icon_unchecked_box.svg";
import CheckedBox from "../assets/icon_checked_box.svg";
import { setItem, getItem } from "../components/Cart";

// 메뉴 데이터 인터페이스
interface MenuData {
    no: number;
    name: string;
    image: string | null;
    price: number;
    description: string;
    min_quantity: number;
    max_quantity: number;
    is_soldout: number;
    store: number;
}

// 메뉴 옵션의 세부사항 인터페이스
interface MenuDetail {
    no: number;
    title: string;
    price: number;
    last_modified: string | null;
    option: number;
}

// 메뉴 옵션 인터페이스
interface MenuOption {
    option: {
        no: number;
        is_required: "required" | "optional";
        title: string;
        is_duplicate_allowed: "Yes" | "No";
        max_duplicate_limit: number;
        menu: number;
    };
    details: MenuDetail[];
}

type MenuInfoProps = NavigationProp & RouteProp;

const BASE_URL = "http://money.ipdisk.co.kr:58200/";

export default function MenuInfo({ navigation, route }: MenuInfoProps): React.JSX.Element {
    const { menuId } = route.params;
    const [count, setCount] = useState(0);
    const [likeChecked, setLikeChecked] = useState<boolean>(false);
    const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: boolean }>({});
    const [menu, setMenu] = useState<MenuData | null>(null); // 메뉴 정보를 저장할 상태
    const [options, setOptions] = useState<MenuOption[]>([]); // 옵션 정보를 저장할 상태
    const TitleImg = require('../assets/jjiggajjigga_title.png');

    // 총 가격 계산 함수
    const calculateTotalPrice = () => {
        if (!menu) return 0; // menu가 null일 경우 0 반환

        // 기본 메뉴 가격
        let totalPrice = menu.price * count;
        
        // 선택된 옵션 가격 추가
        options.forEach(option => {
            option.details.forEach(detail => {
                if (selectedOptions[detail.title]) {
                    totalPrice += detail.price * count; // 선택된 세부 옵션 가격만 추가
                }
            });
    });

    return totalPrice; // 총 가격 반환
    };

    useEffect(() => {
        const getFetchMenuInfo = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/stores/id/menu/${menuId}`);
                setMenu(response.data.menu_data); // 메뉴 정보 설정
                setOptions(response.data.menu_options); // 옵션 정보 설정
            } catch (error) {
                console.error("Error fetching menu info:", error);
            }
        };
        getFetchMenuInfo();
    }, [menuId]);

    async function handleOrder() {
        if (!menu) return; // menu가 null일 경우 주문 처리 중단
        if (!options) return;
        
        const orderedMenu = {
            Menu: {
                Price: menu.price,
                Title: menu.name,
            },
            Count: count,
            Price: calculateTotalPrice(), // 총 가격 계산
            Option: [
                { Cost: menu.price, Title: selectedFlavor || "" }, // 선택된 맛
                ...options
                    .filter(option => selectedOptions[option.option.title])
                    .flatMap(option => option.details.map(detail => ({ Cost: detail.price, Title: detail.title })))
            ],
            store_id : menu.store,
        };

        const existingOrders = await getItem('cartItems');
        const orders = existingOrders ? JSON.parse(existingOrders) : [];
        orders.push(orderedMenu); // 주문 항목 추가
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
                {menu && (
                    <View style={styles.storeBox}>
                        <View style={styles.InfoBox}>
                            <Text style={styles.menuName}>{menu.name}</Text>
                            <View>
                                <TouchableOpacity onPress={handleLike}>
                                    {likeChecked ? <FullLike /> : <EmptyLike />}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}

                <View style={styles.padding}></View>

                <View style={{ height: '20%', justifyContent: 'center', alignItems: 'center', paddingVertical: '5%', rowGap: '10%' }}>
                    <View style={styles.flavoursBox}>
                        {options && options.length > 0 && options[0].option ? (
                            <>
                                <Text style={styles.price}>{options[0].option.title}</Text>
                                <View style={styles.round}>
                                    <Text>{options[0].option.is_required === "required" ? "필수" : "선택"}</Text>
                                </View>
                            </>
                        ) : (
                            <Text style={styles.price}>맛 선택이 없습니다</Text>
                        )}
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
                            <Text>{menu ? `${formatPrice(menu?.price)}원` : "가격 정보 없음"}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.padding}></View>

                <View style={{ height: '20%', justifyContent: 'center', alignItems: 'center', paddingVertical: '5%', rowGap: '10%' }}>
                    <View style={styles.flavoursBox}>
                        <Text style={styles.price}>옵션 선택</Text>
                        {options.length > 1 && options[1].option ?
                            <View style={styles.detailRound}>
                                <Text>{options[1].option.is_required === "required" ? "필수" : "선택"}</Text>
                            </View>
                            :
                            <Text style={styles.price}>옵션 선택이 없습니다</Text>
                        }
                    </View>
                    
                    {options.length > 1 && options[1].details && options[1].details.length > 0 ? (
                        options[1].details.map((detail) => (
                            <View key={detail.title} style={styles.flavoursBox}>
                                <TouchableOpacity
                                    style={styles.wrapper}
                                    onPress={() => handleToggleOption(detail.title)}
                                >
                                    {selectedOptions[detail.title] ? <CheckedBox /> : <UncheckedBox />}
                                    <Text style={styles.flavoursPrice}>{detail.title}</Text>
                                </TouchableOpacity>
                                <Text style={styles.flavoursPrice}>{`${formatPrice(detail.price)}원`}</Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.price}>세부사항이 없습니다</Text>
                    )}
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
            <BottomButton name={`${formatPrice(calculateTotalPrice())}원 담기`} onPress={handleOrder} checked={count > 0 && selectedFlavor != null} color="#EC424C" />
        </SafeAreaView>
    );
}
