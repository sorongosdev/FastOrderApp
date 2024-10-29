import React, { useState } from "react";
import { 
    SafeAreaView,
    ScrollView,
    View,
    Text,
} from "react-native";
import styles from "../styles/Reception";
import { NavigationProp } from "../navigation/NavigationProps";
import TopTitle from "../components/TopTitle";
import ProgressBar from "../components/Progress";



export default function Reception({navigation}:NavigationProp):React.JSX.Element {
    const steps = ['주문접수', '조리 중', '조리 완료'];
    const currentStep = 2; // 현재 단계 설정 (0: 주문접수, 1: 조리 중, 2: 조리 완료)

    const [orderMenu, setOrderMenu] = useState([
        { name: '제육볶음', price: '7,000원', img: ''},
        { name: '김치찌개', price: '6,500원', img: ''},
        { name: '된장찌개', price: '6,000원', img: ''}
    ]);

    function handleMoveMain() {
        navigation.navigate('Main')
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.wrap}>
                    <TopTitle name="주문내역" onPress={handleMoveMain} />

                    <View style={styles.padding}></View>

                    <View>
                        <ProgressBar steps={steps} currentStep={currentStep}/>
                    </View>

                    <View>
                        <Text style={styles.lableText}>OO님의 주문이 준비중이예요</Text>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputText}>00:00시 완료 예정</Text>
                        </View>
                    </View>

                    <View>
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

                    <View>
                        <Text style={styles.lableText}>가게 요청사항</Text>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputText}>양파 빼주세요</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}   