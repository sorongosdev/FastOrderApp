import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps';
import styles from "../styles/SignUp";
import BottomButton from "../components/BottomButton";
import TopTitle from "../components/TopTitle";

export default function SignUp({navigation}: NavigationProp):React.JSX.Element {
    const [id, setID] = useState<string>('');
    const [pw, setPW] = useState<string>('');
    const [secondPW, setSecondPW] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [authenticationNumber, setAuthenticationNumber] = useState<string>('0');
    const [checkedAuthentication, setCheckedAuthentication] = useState<boolean>(false);
    const [comparePW, setComparePW] = useState<boolean>(false);


    function handleBack() {
        navigation.navigate('Login');
    }
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
    function handleName(name : string) {
        setName(name)
    }
    function handlePhone(phone : string) {
        setPhone(phone);
    }
    function handleAuthentication(authenticationNumber: string) {
        setAuthenticationNumber(authenticationNumber);
    }


    function handleGetAuthentication() {
        console.log(phone);
        Alert.alert('인증번호를 받았습니다.');
        setAuthenticationNumber('1');
    }
    function handleSetAuthentication() {
        if(authenticationNumber === '123') {
            Alert.alert('인증 성공');
            setCheckedAuthentication(true);
        } else {
            Alert.alert('인증에 실패하셨습니다.');
            setCheckedAuthentication(false);
        }
    }

    function handleDuplicate() {
        Alert.alert('중복확인')    
    }


    function handleLoginPage() {
        if(comparePW && checkedAuthentication) {
            console.log(id);
            console.log(pw);
            console.log(phone);
            console.log(name);
            setID('');
            setPW('');
            setPhone('');
            setName('');
            setAuthenticationNumber('0');
            setCheckedAuthentication(false);
            navigation.navigate('Login')
        }
    }


    return (<SafeAreaView style={styles.container}>
        <View style={styles.signWrap}>
            <TopTitle name="회원가입" onPress={handleBack}/>
            <View style={styles.padding}></View>
        
            <Text style={styles.lableText}>아이디</Text>
            <View style={styles.authBox}>
                <TextInput style={styles.inputButton} placeholder="아이디" placeholderTextColor="#929292" onChangeText={handleIdInput}></TextInput>
                <TouchableOpacity style={styles.buttonBox} onPress={handleDuplicate}>
                    <Text style={styles.buttonText}>중복확인</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.lableText}>비밀번호</Text>
            <TextInput style={styles.input} placeholder="비밀번호" placeholderTextColor="#929292" onChangeText={handlePwInput}></TextInput>
            <TextInput style={styles.input} placeholder="비밀번호 확인" placeholderTextColor="#929292" onChangeText={handleSecondPW}></TextInput>

            <Text style={styles.lableText}>이름</Text>
            <TextInput style={styles.inputName} placeholder="성명을 입력하세요" placeholderTextColor='#929292' onChangeText={handleName}/>
            <Text style={styles.lableText}>휴대폰 인증</Text>
            <View style={styles.authBox}>
                <TextInput style={styles.inputButton} placeholder="휴대폰 번호" placeholderTextColor="#929292" onChangeText={handlePhone}></TextInput>
                <TouchableOpacity style={styles.buttonBox} onPress={handleGetAuthentication}>
                    <Text style={styles.buttonText}>인증번호 받기</Text>
                </TouchableOpacity>
            </View>
            {
            authenticationNumber === '0' ? null :
                <View style={styles.authBox}>
                    <TextInput style={styles.inputButton} placeholder="인증 번호" placeholderTextColor="#929292" onChangeText={handleAuthentication}></TextInput>
                    <TouchableOpacity style={styles.buttonBox} onPress={handleSetAuthentication}>
                        <Text style={styles.buttonText}>인증번호 확인</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
        <TouchableOpacity style= {styles.bottomButtonBox}>
             <BottomButton name="로그인하기" onPress={handleLoginPage} checked={comparePW && checkedAuthentication && name != '' && id != ''}/>
        </TouchableOpacity>
    </SafeAreaView>)
}

