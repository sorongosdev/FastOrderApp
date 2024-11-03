import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Modal,
    TextInput,
} from 'react-native';
import { NavigationProp } from '../navigation/NavigationProps';
import NextArrow from '../assets/icon_next_arrow.svg';
import CheckedEclips from '../assets/icon_checked_eclips.svg';
import UnCheckedBox from '../assets/icon_unchecked_box.svg';
import CheckedBox from '../assets/icon_checked_box.svg';
import Eclips from '../assets/icon_eclips.svg';
import Plus from '../assets/icon_plus.svg';
import Minus from '../assets/icon_minus.svg';
import styles from "../styles/Pay";
import BottomButton from "../components/BottomButton";
import TopTitle from "../components/TopTitle";
import { getItem } from "../components/Cart";

// const BASE_URL = "http://3.39.26.152:8000";


interface OrderItem {
    price: number;
    count: number;
}

export default function Pay({ navigation }: NavigationProp):React.JSX.Element {
    const [peopleModalVisible, setPeopleModalVisible] = useState<boolean>(false);
    const [requestText, setRequestText] = useState<string>('');
    const [selectedChecked, setSelectedChecked] = useState<boolean>(false); //확정 다음에도 사용
    const [checked, setChecked] = useState<boolean>(false); //다음에도 사용
    const [couponCount ,setCouponCount] = useState<number>(0);
    const [count, setCount] = useState<number>(0); //식사 인원 카운트 수
    const [selectedCount, setSelectedCount] = useState<number>(0); //확정된 식사 인원 카운트 수 
    const [storeChecked, setStoreChecked] = useState<boolean>(false); //매장 식사 체크
    const [pickupChecked, setPickupChecked] = useState<boolean>(false); //매장 식사 체크

    const [orderMenu, setOrderMenu] = useState<OrderItem[]>([]);


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
    //         console.error("Error fetching gets:", error);
    //     }
    // };

    const totalPrice = orderMenu.reduce((total, item) => total + item.price * item.count, 0);

    function handleBack() {
        navigation.goBack();
    }
    function handlePeoplePopUP() {
        setPeopleModalVisible(true);
        setStoreChecked(true);
        setPickupChecked(false);
    }
    function handlePickup() {
        setPickupChecked(true);
        setStoreChecked(false);
    }
    function handlePeopleCountInitial() {
        setCount(0);
        setSelectedCount(0);
        setStoreChecked(false);
        setPickupChecked(false);
    }

    function handleMoveReception() {
        navigation.navigate('Reception');
    }
    function handlePlus() {
        setCount(count+1);
    }
    function handleMinus() {
        if(count > 0) {
            setCount(count-1);
        }
    }
    function handleCancelPeoplePopUP() {
        setSelectedCount(count);
        setPeopleModalVisible(false);
    }
    const formatPrice = (price:number) => {
        return new Intl.NumberFormat("ko-KR").format(price);
    };

    return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.wrap}>
                <TopTitle name="주문하기" onPress={handleBack} />

                <View style={styles.padding}></View>

                <View style={{width : '85%'}}>
                    <Text style={styles.labelText}>가게 요청사항</Text>
                    <TextInput 
                        placeholder="요청 입력"
                        placeholderTextColor="#484747"
                        value={requestText}
                        onChangeText={setRequestText}
                        style={styles.inputBox}
                    />
                    <View style={styles.checkWrap}>
                        <TouchableOpacity onPress={() => setChecked(!checked)}>
                            {
                            checked ? <CheckedBox/> : <UnCheckedBox/>
                            }
                        </TouchableOpacity>
                        <Text style={styles.checkboxText}>다음에도 사용</Text>
                    </View>
                    {selectedCount > 0 && (
                    <View style={styles.inputBox}>
                        <TouchableOpacity style={styles.temporal} onPress={handlePeoplePopUP}>
                            {
                            storeChecked ? 
                            <CheckedEclips /> : <Eclips />
                            }
                            <Text style={styles.mealType}>매장식사 • {selectedCount}명</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextArrow} onPress={handlePeopleCountInitial}>
                            <Text style={styles.changePeopleCount}>변경하기</Text>
                            <NextArrow/>
                        </TouchableOpacity>
                    </View>
                    )}
                    {selectedCount == 0 && (
                        <View style={styles.inputBox}>
                            <TouchableOpacity style={styles.temporal} onPress={handlePeoplePopUP}>
                                <Eclips />
                                <Text style={styles.mealType}>매장식사</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.temporal} onPress={handlePickup}>
                                {
                                pickupChecked ? 
                                <CheckedEclips /> : <Eclips />
                                }
                                <Text style={styles.mealType}>픽업</Text>
                            </TouchableOpacity> 
                        </View>
                    )}
                </View>
                <TouchableOpacity style={{width :'85%'}}>
                    <Text style={styles.labelText}>할인쿠폰</Text>
                    <View style={styles.inputBox}>
                        <Text style={couponCount == 0 ? {color : '#A1A1A1'} : {color : '#1B1B1B'}}>{couponCount == 0 ? '사용 가능 0장' :`사용 가능 ${couponCount}장`}</Text>
                        <TouchableOpacity style={styles.nextArrow}>
                            <NextArrow/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <View style={{width : '85%', height : '100%'}}>
                    <Text style={styles.labelText}>결제하기</Text>
                    <View style={styles.payInfo}>
                            <View style={styles.whiteBox}>
                                <Text style={styles.papaPoint}>패패오더 포인트</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.myPoint}>총 보유 포인트</Text>
                                    <Text style={styles.myPoint}>{`${formatPrice(50000)}P`}</Text>
                                </View>
                            </View>
                            <View style={styles.grayBox}>
                                <View style={styles.textBox}>
                                    <Text style={styles.payPoint}>결제예정 포인트</Text>
                                    <Text style={styles.payPoint}>{`${formatPrice(totalPrice)}P`}</Text>
                                </View>
                                <View style={styles.textBox}>
                                    <Text style={styles.remainPointText}>예상 포인트 잔액</Text>
                                    <Text style={styles.remainPoint}>{`${formatPrice(50000-totalPrice)}P`}</Text>
                                </View>
                            </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        <BottomButton name="결제하기" onPress={handleMoveReception} checked = {pickupChecked || (storeChecked && selectedCount > 0)} color="#1B1B1B"/>

        {/* 식사 인원 모달 */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={peopleModalVisible}
                onRequestClose={() => {
                    setPeopleModalVisible(!peopleModalVisible);
                }}>
                <View style={styles.peopleModalBackground}>
                    <View style={styles.peopleModalView}>
                        <View style={styles.peopleModalTopBox}>
                            <Text style={styles.peopleModalText}>매장 식사 인원 수</Text>
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
                        <View style={styles.line}></View>
                        <TouchableOpacity style = {styles.peopleCountButton} onPress={handleCancelPeoplePopUP}>
                            <Text style={styles.peopleCountButtonText}>완료</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
    </SafeAreaView>
    )
}   