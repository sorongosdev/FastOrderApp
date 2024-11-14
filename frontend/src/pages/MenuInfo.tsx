    import React, { useState, useEffect } from "react";
    import { View, Text, SafeAreaView, TouchableOpacity, Alert } from "react-native";
    import { NavigationProp, RouteProp } from '../navigation/NavigationProps';
    import axios from "axios";
    import styles from "../styles/MenuInfo";
    import StoreImg from "../components/StoreImg";
    import { BASE_URL } from '../consts/Url';
    import Plus from "../assets/icon_menu_plus.svg";
    import Minus from "../assets/icon_menu_minus.svg";
    import BottomButton from "../components/BottomButton";
    import EmptyLike from "../assets/icon_empty_like.svg";
    import FullLike from "../assets/icon_full_like.svg";
    import CheckedEclips from "../assets/icon_checked_eclips.svg";
    import EmptyEclips from "../assets/icon_eclips.svg";
    import UncheckedBox from "../assets/icon_unchecked_box.svg";
    import CheckedBox from "../assets/icon_checked_box.svg";
    import { getToken } from "../components/UserToken";
    import { setItem, getItem } from "../components/Cart";

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

    type MenuInfoProps = NavigationProp & RouteProp;


    export default function MenuInfo({ navigation, route }: MenuInfoProps): React.JSX.Element {
        const { menuId } = route.params;
        const [count, setCount] = useState(1);
        const [likeChecked, setLikeChecked] = useState<boolean>(false);
        const [selectedFlavor, setSelectedFlavor] = useState<string>("");
        const [selectedRequiredNo, setSelectedRequiredNo] = useState<number>(0);
        const [selectedRequiredCost, setSelectedRequiredCost] = useState<number>(0);
        const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: boolean }>({});
        const [menu, setMenu] = useState<MenuData | null>(null); // 메뉴 정보를 저장할 상태
        const [options, setOptions] = useState<MenuOption[]>([]); // 옵션 정보를 저장할 상태

        const calculateTotalPrice = () => {
            if (!menu) return 0; // menu가 null일 경우 0 반환
        
            // 기본 메뉴 가격
            let totalPrice = menu.price * count;
            
            // 선택된 필수 옵션 가격 추가
            options.forEach(option => {
                if (option.option.is_required === "required") {
                    option.details.forEach(detail => {
                        if (selectedFlavor === detail.title) { // 필수 옵션이 선택된 경우
                            totalPrice += detail.price * count; // 선택된 세부 옵션 가격 추가
                        }
                    });
                }
            });
        
            // 선택된 선택적 옵션 가격 추가
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
                    const token = await getToken();
                    const response = await axios.get(`${BASE_URL}/stores/id/menu/${menuId}?token=${token}`);
                    setMenu(response.data.menu_data); // 메뉴 정보 설정
                    setOptions(response.data.menu_options); // 옵션 정보 설정
                    setLikeChecked(response.data.is_wished);
                    console.log(JSON.stringify(response.data, null, 2));
                } catch (error) {
                    console.error("Error fetching menu info:", error);
                }
            };
            getFetchMenuInfo();
        }, [menuId]);

        async function handleOrder() {
            if (!menu) return; 
            if (!options) return;
        
            const selectedOptionsDetails = options
                .flatMap(option => option.details) 
                .filter(detail => selectedOptions[detail.title]) 
                .map(detail => ({
                    Cost: detail.price,
                    Title: detail.title,
                    OptionNo: detail.no, 
                }));
        
            const orderedMenu = {
                Menu: {
                    Price: menu.price,
                    Title: menu.name,
                    no: menuId, 
                    image : menu.image,
                },
                Count: count,
                Price: calculateTotalPrice(), 
                Option: [
                    ...(selectedFlavor === "필수 항목이 없음" ? [] : [{ Cost: selectedRequiredCost, Title: selectedFlavor , OptionNo: selectedRequiredNo  }]), 
                    ...selectedOptionsDetails, 
                ],
                store_id: menu.store,
            };
        
            const existingOrders = await getItem('cartItems');
            const orders = existingOrders ? JSON.parse(existingOrders) : [];
        
            if (orders.length > 0 && orders[0].store_id !== orderedMenu.store_id) {
                Alert.alert("다른 가게의 메뉴를 추가할 수 없습니다.");
                return; 
            }
        
            orders.push(orderedMenu);
            await setItem('cartItems', JSON.stringify(orders));
            console.log("Updated Cart Items:", orders);
            navigation.navigate('Shopping');
        }

        useEffect(() => {
            if (options.length === 0) {
                // If there are no menu options, set selectedFlavor to indicate no required items.
                setSelectedFlavor("필수 항목이 없음");
            } else if (options[0].option.is_required === "optional") {
                // If the first option exists and is not required, set selectedFlavor accordingly.
                setSelectedFlavor("필수 항목이 없음");
            }
        }, [options]);
        
        

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
            const postFetchStoreLike = async () => {  //메뉴 아이디 넘겨줄 겁니다.
                try {
                const token = await getToken();
                const response = await axios.post(`${BASE_URL}/user/wish`, {
                    token : token,
                    type : "menu",
                    menu_id : menuId,
                });
                console.log(response.data);
                } catch (error) {
                console.log("Error during Store Like");
                }
            }
            postFetchStoreLike();
        }

        function handleSelectFlavor(Option : MenuDetail) {
            setSelectedFlavor(Option.title);
            setSelectedRequiredNo(Option.no);
            setSelectedRequiredCost(Option.price);
            
        }

        function handleToggleOption(optionTitle: string) {
            setSelectedOptions((prev) => ({
                ...prev,
                [optionTitle]: !prev[optionTitle]
            }));
        }

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.wrap}>
                    <StoreImg onBack={handleBack} onShopping={handleMoveShopping} img={menu?.image} />
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

                    {options.length > 1 && options[0].details?.length > 0 ? (
                    <View style={{ justifyContent: 'flex-start', marginTop: '5%', gap: 20, marginBottom: '5%' }}>
                        <View style={styles.flavoursBox}>
                            {options && options.length > 0 && options[0].option ? (
                                <>
                                    <Text style={styles.price}>{options[0].option.title}</Text>
                                    <View style={options[0].option.is_required === "required" ? styles.round : styles.detailRound}>
                                        <Text>{options[0].option.is_required === "required" ? "필수" : "선택"}</Text>
                                    </View>
                                </>
                            ) : (
                                <View></View>
                            )}
                        </View>

                        {options[0].option.is_required === "required" ? (
                            options[0].details.map((optionObj) => (
                                <View key={optionObj.no} style={styles.flavoursBox}>
                                    <TouchableOpacity
                                        style={styles.wrapper}
                                        onPress={() => {
                                            handleSelectFlavor(optionObj);
                                        }}
                                    >
                                        {selectedFlavor === optionObj.title ? <CheckedEclips /> : <EmptyEclips />}
                                        <Text style={styles.flavoursPrice}>{optionObj.title}</Text>
                                    </TouchableOpacity>
                                    <Text>
                                        {menu ? `${formatPrice(optionObj.price)}원` : "가격 정보 없음"}
                                    </Text>
                                </View>
                            ))
                        ) : (
                            options[0].details.map((detail) => (
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
                        )}
                    </View>) : (<View></View>)
                    
                    }
                    <View style={styles.paddingSecond}></View>


                    
                    {options.length > 1 && options[1].details?.length > 0 ? (
                    <View style={{ justifyContent: 'flex-start', marginTop: '5%', gap : 20, marginBottom: '5%'}}>
                        <View style={styles.flavoursBox}>
                            <Text style={styles.price}>옵션 선택</Text>
                            {options[1].option ? (
                                <View style={options[1].option.is_required === "required" ?  styles.round : styles.detailRound }>
                                    <Text>{options[1].option.is_required === "required" ? "필수" : "선택"}</Text>
                                </View>
                            ) : (
                                <View></View>
                            )}
                        </View>
                        {options[1].details.map((detail) => (
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
                            ))}
                    </View>
                        ) : (
                            <View style={styles.paddingSecond}></View>
                        )}

                    {options.length > 1 && options[1].details && options[1].details.length > 0 ?
                    <View style={styles.paddingSecond}></View> :
                    <View></View>
                    }
                    


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