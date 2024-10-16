import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps';
import styles from "../styles/SignUp";
import BottomButton from "../components/BottomButton";

export default function SignUp({navigation}: NavigationProp):React.JSX.Element {
    const [id, setID] = useState<string>('');
    const [pw, setPW] = useState<string>('');
    const [secondPW, setSecondPW] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [authenticationNumber, setAuthenticationNumber] = useState<string>('123');

    const [comparePW, setComparePW] = useState<boolean>(false);

    function handleIdInput(id : string) {
        setID(id);
    }

    function handlePwInput(pw : string) {
        setPW(pw);
        if(pw == secondPW) {
            setComparePW(true)
            return comparePW 
        } else {
            setComparePW(false)
            return comparePW
        }
    }

    function handleSecondPW(secondPW: string) {
        setSecondPW(secondPW);
        if(pw == secondPW) {
            setComparePW(true)
            return comparePW 
        } else {
            setComparePW(false)
            return comparePW
        }
    }

    function handlePhone(phone : string) {
        setPhone(phone);
    }

    function handleAuthentication() {
        console.log(phone);
    }

    function handleDuplicate() {
        Alert.alert('중복확인')    
    }

    function handleGetAuthentication() {
        Alert.alert('인증번호 받기')
    }

    function handleLoginPage() {
        if(comparePW && authenticationNumber == '123') {
            console.log(id);
            console.log(pw);
            console.log(phone);
            navigation.navigate('Login')
        }
    }


    return (<SafeAreaView style={styles.container}>
        
            <Text style={styles.titleText}>회원가입</Text>
            <View style={styles.padding}></View>
        <ScrollView style={styles.signWrap}>
        
            <Text style={styles.lableText}>아이디</Text>
            <View style={styles.wrapper}>
                <TextInput style={styles.inputButton} placeholder="아이디" placeholderTextColor="#929292" onChangeText={handleIdInput}></TextInput>
                <TouchableOpacity style={styles.buttonBox}>
                    <Text style={styles.buttonText} onPress={handleDuplicate}>중복확인</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.lableText}>비밀번호</Text>
            <TextInput style={styles.input} placeholder="비밀번호" placeholderTextColor="#929292" onChangeText={handlePwInput}></TextInput>
            <TextInput style={styles.input} placeholder="비밀번호 확인" placeholderTextColor="#929292" onChangeText={handleSecondPW}></TextInput>

            <Text style={styles.lableText}>휴대폰 인증</Text>
            <View style={styles.wrapper}>
                <TextInput style={styles.inputButton} placeholder="휴대폰 번호" placeholderTextColor="#929292" onChangeText={handlePhone}></TextInput>
                <TouchableOpacity style={styles.buttonBox} onPress={handleAuthentication}>
                    <Text style={styles.buttonText} onPress={handleGetAuthentication}>인증번호 받기</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        <TouchableOpacity style= {styles.bottomButtonBox}>
             <BottomButton name="로그인하기" onPress={handleLoginPage}/>
        </TouchableOpacity>
    </SafeAreaView>)
}

