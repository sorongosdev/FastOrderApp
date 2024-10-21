import React from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { NavigationProp } from '../navigation/NavigationProps';
import BackArrow from '../assets/icon_back_arrow.svg';
import NextArrow from '../assets/icon_next_arrow.svg';
import Eclips from '../assets/icon_eclips.svg';
import styles from "../styles/Pay";
import BottomButton from "../components/BottomButton";

export default function Pay({ navigation }: NavigationProp):React.JSX.Element {

    function handleBack() {
        navigation.navigate('Shopping')
    }

    return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.wrap}>
                <View style = {styles.wrapper}>
                        <TouchableOpacity onPress={handleBack}>
                            <BackArrow/>
                        </TouchableOpacity>
                    <Text style={styles.mainText}>주문하기</Text>
                </View>
            

                <View style={styles.padding}></View>

                <View>
                    <Text style={styles.labelText}>가게 요청사항</Text>
                    <View style={styles.inputBox}>
                        <Text>요청 입력</Text>
                        <TouchableOpacity style={styles.nextArrow}>
                            <NextArrow/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputBox}>
                        <TouchableOpacity style={styles.temporal}>
                            <Eclips />
                            <Text style={styles.mealType}>매장식사</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.temporal}>
                            <Eclips />
                            <Text style={styles.mealType}>픽업</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.labelText}>할인쿠폰</Text>
                    <View style={styles.inputBox}>
                        <Text>요청 입력</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.labelText}>현금영수증</Text>
                    <View style={styles.inputBox}>
                        <Text>신청 안함</Text>
                        <TouchableOpacity style={styles.nextArrow}>
                            <NextArrow/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.labelText}>결제하기</Text>
                    <View style={styles.payInfo}>
                            <View>
                                <Text>패패오더 포인트</Text>
                                <View style={styles.temporal}>
                                    <Text>총 보유 포인트</Text>
                                    <Text>50,000 P</Text>
                                </View>
                            <View>
                                <View style={styles.temporal}>
                                    <Text>결제 포인트</Text>
                                    <Text>- 28,000 P</Text>
                                </View>
                                <View style={styles.temporal}>
                                    <Text>예상 포인트 잔액</Text>
                                    <Text>22,000 P</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        <BottomButton name="결제하기" onPress={handleBack} />
    </SafeAreaView>
    )
}   