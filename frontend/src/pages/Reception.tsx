import React, { useState, useEffect } from "react";
import { 
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import styles from "../styles/Reception";
import { NavigationProp } from "../navigation/NavigationProps";
import TopTitle from "../components/TopTitle";
import ProgressBar from "../components/Progress";
import BottomButton from "../components/BottomButton";
// import { getItem } from "../components/Cart";



interface OrderItem {
    menuName: string;
    price: number;
    count: number;
    menuId: number; 
    TitleImg : any;
}

const BASE_URL = "http://money.ipdisk.co.kr:58200/";

export default function Reception({navigation}:NavigationProp):React.JSX.Element {
    const steps = ['접수확인', '조리 중', '조리 완료'];
    const [currentStep, setCurrentStep] = useState(-1); // 현재 단계 설정 (0: 접수확인, 1: 조리 중, 2: 조리 완료)

    const [orderMenu, setOrderMenu] = useState<OrderItem[]>([]);

    // useEffect(() => {
    //     const fetchCartItems = async () => {
    //         try {
    //             const cartItems = await getItem('cartItems');
    //             if (cartItems) {
    //                 setOrderMenu(JSON.parse(cartItems));
    //             }
    //         } catch (error) {
    //             console.error("Failed to fetch cart items:", error);
    //         }
    //     };

    //     fetchCartItems();
    // }, []);

    function handleMoveMain() {
        navigation.navigate('BottomNavigation');
    }
    function handleBack() {
        navigation.goBack();
    }
    // const fetchCurrentStep = async () => {
    //     try {
    //         const response = await fetch('API_URL'); // API 호출
    //         const data = await response.json();
    //         setCurrentStep(data.currentStep); // 데이터에서 currentStep 업데이트
    //     } catch (error) {
    //         console.error('Error fetching current step:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchCurrentStep(); // 컴포넌트 마운트 시 한 번 호출

    //     const interval = setInterval(() => {
    //         fetchCurrentStep(); // 주기적으로 호출
    //     }, 5000); // 5초마다 호출

    //     return () => clearInterval(interval); // 클린업
    // }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.wrap}>
                    <TopTitle name="접수내역" onPress={handleBack} />

                    <View style={styles.padding}></View>

                    <View>
                        <ProgressBar steps={steps} currentStep={currentStep}/>
                    </View>
                    {
                        currentStep >= 0 
                    ? (     
                    <View style={{width : '85%'}}>
                        <Text style={styles.lableText}>OO님의 주문이 준비중이예요</Text>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputText}>00:00시 완료 예정</Text>
                        </View>
                    </View>
                    ): (
                    <View style={{width : '85%', marginTop : '5%'}}>
                        <View style={styles.inputBox}>
                            <Text style={styles.cancelInfoText}>접수 확인 전 까지만 주문 취소가 가능해요</Text>
                            <TouchableOpacity style={styles.cancelBox}>
                                <Text style={styles.cancelText}>주문취소</Text>
                            </TouchableOpacity>
                        </View>
                    </View> )
                    }
                    <View style={{width : '85%'}}>
                        <Text style={styles.lableText}>찌개찌개 한양대 에리카 점</Text>
                        <View style={styles.menuBox}>
                            {orderMenu.map((item, index) => (
                                <View 
                                    key={index} 
                                    style={[
                                        styles.orderMenu, 
                                        index < orderMenu.length - 1 ? styles.withSeparator : styles.withoutSeparator
                                    ]}
                                >
                                    <View>
                                        <Text style={styles.menuName}>{item.menuName}</Text>
                                        <Text style={styles.menuPrice}>{item.price}</Text>
                                    </View>
                                    <View style={styles.menuImg}>
                                        <Image source={item.TitleImg} style={{height :'100%', width : '100%'}}/>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={{width : '85%'}}>
                        <Text style={styles.lableText}>가게 요청사항</Text>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputText}>양파 빼주세요</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <BottomButton name="홈으로 돌아가기" onPress={handleMoveMain} checked={true} color="#EC424C"/>
        </SafeAreaView>
    )
}   