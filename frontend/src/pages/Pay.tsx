import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Alert,
    Modal,
    TextInput,
} from 'react-native';
import { NavigationProp } from '../navigation/NavigationProps';
import BackArrow from '../assets/icon_back_arrow.svg';
import NextArrow from '../assets/icon_next_arrow.svg';
import Eclips from '../assets/icon_eclips.svg';
import Cancel from '../assets/icon_cancel.svg';
import styles from "../styles/Pay";
import BottomButton from "../components/BottomButton";

export default function Pay({ navigation }: NavigationProp):React.JSX.Element {
    const [modalVisible, setModalVisible] = useState(false);
    const [requestText, setRequestText] = useState('');


    function handleBack() {
        navigation.navigate('Shopping');
    }
    function handleReqPopUp() {
        setModalVisible(true);
    }

    function handleAlertCoupon() {
        Alert.alert('현재 가지고 있는 쿠폰이 없습니다.');
    }

    function handleSubmitRequest() {
        setRequestText(requestText);
        setModalVisible(false);
    }
    function handleCancelRequest() {
        setRequestText('');
        setModalVisible(false);
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
                    <TouchableOpacity style={styles.inputBox} onPress={handleReqPopUp}>
                        <Text>{requestText || '요청 입력'}</Text>
                        <TouchableOpacity style={styles.nextArrow}>
                            <NextArrow/>
                        </TouchableOpacity>
                    </TouchableOpacity>
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
                <TouchableOpacity onPress={handleAlertCoupon}>
                    <Text style={styles.labelText}>할인쿠폰</Text>
                    <View style={styles.inputBox}>
                        <Text>요청 입력</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.labelText}>현금영수증</Text>
                    <View style={styles.inputBox}>
                        <Text>신청 안함</Text>
                        <TouchableOpacity style={styles.nextArrow}>
                            <NextArrow/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.labelText}>결제하기</Text>
                    <View style={styles.payInfo}>
                            <View style={styles.whiteBox}>
                                <Text style={styles.papaPoint}>패패오더 포인트</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.myPoint}>총 보유 포인트</Text>
                                    <Text style={styles.myPoint}>50,000 P</Text>
                                </View>
                            </View>
                            <View style={styles.grayBox}>
                                <View style={styles.textBox}>
                                    <Text style={styles.payPoint}>결제 포인트</Text>
                                    <Text style={styles.payPoint}>- 28,000 P</Text>
                                </View>
                                <View style={styles.textBox}>
                                    <Text style={styles.payPoint}>예상 포인트 잔액</Text>
                                    <Text style={styles.payPoint}>22,000 P</Text>
                                </View>
                            </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        <BottomButton name="결제하기" onPress={handleBack} />

        {/* 팝업 모달 */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalView}>
                        <View style={styles.modalTextBox}>
                            <Text style={styles.modalText}>가게 요청사항</Text>
                            <TouchableOpacity onPress={handleCancelRequest}>
                                <Cancel />
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="예) 양파 빼주세요, 안 맵게 해주세요"
                            placeholderTextColor={'#484747'}
                            value={requestText}
                            onChangeText={setRequestText}
                        />
                    </View>
                </View>
                <BottomButton name='완료' onPress={handleSubmitRequest} />
            </Modal>
    </SafeAreaView>
    )
}   