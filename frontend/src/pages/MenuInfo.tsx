import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Alert, Image } from "react-native";
import type { StackScreenProps } from '@react-navigation/stack';
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/NavigationProps';
import axios from "axios";
import styles from "../styles/MenuInfo";
import StoreImg from "../components/StoreImg";
import { BASE_URL } from "../consts/Url";
import Plus from "../assets/icon_menu_plus.svg";
import Minus from "../assets/icon_menu_minus.svg";
import BottomButton from "../components/BottomButton";
import EmptyLike from "../assets/icon_empty_like.svg";
import FullLike from "../assets/icon_full_like.svg";
import CheckedEclips from "../assets/icon_checked_eclips.svg";
import EmptyEclips from "../assets/icon_eclips.svg";
import CheckedBox from "../assets/icon_checked_box.svg";
import UnCheckedBox from "../assets/icon_unchecked_box.svg";
/** Redux */
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { addToCart } from '../redux/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';

// 메뉴 데이터 인터페이스
interface MenuData {
    no: number;
    name: string;
    image: string;
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

// 타입 정의를 명확히 수정
type MenuInfoProps = StackScreenProps<RootStackParamList, 'MenuInfo'>;


export default function MenuInfo({ navigation, route }: MenuInfoProps): React.JSX.Element {
    const dispatch = useAppDispatch();
    const token = useAppSelector(state => state.user.token);
    const { storeId: cartStoreId, items: cartItems } = useAppSelector(state => state.cart);

    const { menuId } = route.params;
    const [count, setCount] = useState(1);
    const [likeChecked, setLikeChecked] = useState<boolean>(false);
    const [selectedFlavor, setSelectedFlavor] = useState<string>("");
    const [selectedRequiredNo, setSelectedRequiredNo] = useState<number>(0);
    const [selectedRequiredCost, setSelectedRequiredCost] = useState<number>(0);
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: boolean }>({});
    const [menu, setMenu] = useState<MenuData | null>(null);
    const [options, setOptions] = useState<MenuOption[]>([]);

    const calculateTotalPrice = () => {
        if (!menu) return 0;
        let totalPrice = menu.price * count;

        options.forEach(option => {
            if (option.option.is_required === "required") {
                option.details.forEach(detail => {
                    if (selectedFlavor === detail.title) {
                        totalPrice += detail.price * count;
                    }
                });
            }
        });

        options.forEach(option => {
            option.details.forEach(detail => {
                if (selectedOptions[`${option.option.no}_${detail.title}`]) {
                    totalPrice += detail.price * count;
                }
            });
        });

        return totalPrice;
    };

    useEffect(() => {
        const getFetchMenuInfo = async () => {
            try {
                const url = token
                    ? `${BASE_URL}/stores/id/menu/${menuId}?token=${token}`
                    : `${BASE_URL}/stores/id/menu/${menuId}`;

                const response = await axios.get(url);
                setMenu(response.data.menu_data);
                setOptions(response.data.menu_options);
                setLikeChecked(response.data.is_wished);
                console.log(JSON.stringify(response.data, null, 2));
            } catch (error) {
                console.error("Error fetching menu info:", error);
            }
        };
        getFetchMenuInfo();
    }, [menuId, token]);

    function handleOrder() {
        if (!menu || !options) return;

        // 선택된 옵션 정보 생성
        const selectedOptionsDetails = options
        .flatMap((currentOption) => {
            const optionNo = currentOption.option.no;
            return currentOption.details
                .filter(detail => selectedOptions[`${optionNo}_${detail.title}`])
                .map(detail => ({
                    Cost: detail.price,
                    Title: detail.title,
                    OptionNo: detail.no,
                }));
        });

        // 주문 메뉴 객체 생성
        const orderedMenu = {
            Menu: {
                Price: menu.price,
                Title: menu.name,
                no: menuId,
                image: menu.image,
            },
            Count: count,
            Price: calculateTotalPrice(),
            Option: [
                ...(selectedFlavor === "필수 항목이 없음" ? [] : [{ Cost: selectedRequiredCost, Title: selectedFlavor, OptionNo: selectedRequiredNo }]),
                ...selectedOptionsDetails,
            ],
            store_id: menu.store,
        };

        // 다른 가게의 메뉴를 담으려고 할 때 확인
        if (cartStoreId !== null && cartStoreId !== menu.store && cartItems.length > 0) {
            Alert.alert(
                "다른 가게 메뉴",
                "장바구니에는 한 가게의 메뉴만 담을 수 있습니다. 기존 메뉴를 삭제하고 새로운 메뉴를 담으시겠습니까?",
                [
                    {
                        text: "취소",
                        style: "cancel"
                    },
                    {
                        text: "확인",
                        onPress: () => {
                            // 장바구니에 메뉴 추가 - Redux 액션 디스패치
                            dispatch(addToCart(orderedMenu));
                            navigation.navigate("Shopping");
                        }
                    }
                ]
            );
        } else {
            // 장바구니에 메뉴 추가 - Redux 액션 디스패치
            dispatch(addToCart(orderedMenu));
            navigation.navigate("Shopping");
        }
    }

    function handleToggleOption(optionTitle: string, optionGroupNo: number, isDuplicateAllowed: "Yes" | "No", isRequired: "required" | "optional") {
        setSelectedOptions((prev) => {
            const groupSelected = Object.entries(prev)
                .filter(([key]) => key.startsWith(`${optionGroupNo}_`))
                .find(([, isSelected]) => isSelected);

            if (isDuplicateAllowed === "No" && groupSelected && !prev[`${optionGroupNo}_${optionTitle}`]) {
                Alert.alert("이 옵션은 그룹 내에서 하나만 선택할 수 있습니다.");
                return prev;
            }

            const updatedOptions = {
                ...prev,
                [`${optionGroupNo}_${optionTitle}`]: !prev[`${optionGroupNo}_${optionTitle}`],
            };

            // 필수 항목이면서 선택된 옵션일 때, 해당 옵션을 selectedFlavor로 설정
            if (isRequired === "required" && updatedOptions[`${optionGroupNo}_${optionTitle}`]) {
                setSelectedFlavor(optionTitle);
            } else if (isRequired === "required") {
                setSelectedFlavor(""); // 필수 항목이 선택 해제되면 초기화
            }

            return updatedOptions;
        });
    }

    // 찜 토글 함수
    function handleToggleLike() {
        if (!menu || !token) return;

        if (likeChecked) {
            // 찜 제거
            dispatch(removeFromWishlist({
                token,
                storeId: menu.store,
                menuId: menu.no
            }));
        } else {
            // 찜 추가
            dispatch(addToWishlist({
                token,
                storeId: menu.store,
                menuId: menu.no
            }));
        }

        // 즉각적인 UI 업데이트를 위해 상태 변경
        setLikeChecked(!likeChecked);
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("ko-KR").format(price);
    };

    function handleMinus() {
        if (count > 0) setCount(count - 1);
    }

    function handlePlus() {
        setCount(count + 1);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <StoreImg onBack={() => navigation.goBack()} onShopping={() => navigation.navigate("Shopping")} img={menu?.image} />
                {menu && (
                    <View style={styles.storeBox}>
                        <View style={styles.InfoBox}>
                            <Text style={styles.menuName}>{menu.name}</Text>
                            <TouchableOpacity onPress={handleToggleLike}>
                                {likeChecked ? <FullLike /> : <EmptyLike />}
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                <View style={styles.padding}></View>

                {options.map((option, idx) => (
                    <View key={idx} style={{ marginTop: "5%", gap: 20, marginBottom: "5%" }}>
                        <View style={styles.flavoursBox}>
                            <Text style={styles.price}>{option.option.title}</Text>
                            <View style={option.option.is_required === "required" ? styles.round : styles.detailRound}>
                                <Text>{option.option.is_required === "required" ? "필수" : "선택"}</Text>
                            </View>
                        </View>
                        {option.details.map((detail) => (
                            <View key={detail.no} style={styles.flavoursBox}>
                                {option.option.is_required === "required" ?
                                    (
                                        <TouchableOpacity
                                            style={styles.wrapper}
                                            onPress={() => handleToggleOption(detail.title, option.option.no, option.option.is_duplicate_allowed, option.option.is_required)}
                                        >
                                            {selectedOptions[`${option.option.no}_${detail.title}`] ? <CheckedBox /> : <UnCheckedBox />}
                                            <Text style={styles.flavoursPrice}>{detail.title}</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity
                                            style={styles.wrapper}
                                            onPress={() => handleToggleOption(detail.title, option.option.no, option.option.is_duplicate_allowed, option.option.is_required)}
                                        >
                                            {selectedOptions[`${option.option.no}_${detail.title}`] ? <CheckedEclips /> : <EmptyEclips />}
                                            <Text style={styles.flavoursPrice}>{detail.title}</Text>
                                        </TouchableOpacity>)
                                }

                                <Text style={styles.flavoursPrice}>{`${formatPrice(detail.price)}원`}</Text>
                            </View>
                        ))}
                    </View>
                ))}

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
            <BottomButton
                name={`${formatPrice(calculateTotalPrice())}원 담기`}
                onPress={handleOrder}
                checked={count > 0 && (options.some(option => option.option.is_required === "required") ? selectedFlavor !== "" && selectedFlavor !== "필수 항목이 없음" : true)}
                color="#EC424C"
            />
        </SafeAreaView>
    );
}