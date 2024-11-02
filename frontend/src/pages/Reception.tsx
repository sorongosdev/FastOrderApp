import React, { useState, useEffect } from "react";
import { 
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import styles from "../styles/Reception";
import { NavigationProp } from "../navigation/NavigationProps";
import TopTitle from "../components/TopTitle";
import ProgressBar from "../components/Progress";
import BottomButton from "../components/BottomButton";



export default function Reception({navigation}:NavigationProp):React.JSX.Element {
    const steps = ['접수확인', '조리 중', '조리 완료'];
    const [currentStep, setCurrentStep] = useState(-1); // 현재 단계 설정 (0: 접수확인, 1: 조리 중, 2: 조리 완료)

    const [orderMenu, setOrderMenu] = useState([
        { name: '제육볶음', price: '7,000원', img: ''},
        { name: '김치찌개', price: '6,500원', img: ''},
        { name: '된장찌개', price: '6,000원', img: ''}
    ]);

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
                    <TopTitle name="주문내역" onPress={handleBack} />

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
                                        <Text style={styles.menuName}>{item.name}</Text>
                                        <Text style={styles.menuPrice}>{item.price}</Text>
                                    </View>
                                    <View style={styles.menuImg}></View>
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
            <BottomButton name="홈으로 돌아가기" onPress={handleMoveMain} checked={true}/>
        </SafeAreaView>
    )
}   