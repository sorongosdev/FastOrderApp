import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import UnCheckedBox from '../assets/icon_unchecked_box.svg';
import CheckedBox from '../assets/icon_checked_box.svg';
import TradeMark from '../assets/icon_trademark.svg';
import styles from '../styles/Login';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { loginUser } from '../redux/slices/userSlice';

interface LoginProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

export default function Login({navigation}: LoginProps): React.JSX.Element {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false); //로그인 상태 유지

  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.user);

  const handleLogin = async () => {
    try {
      const resultAction = await dispatch(loginUser({ textId: id, pw: password }));
      if (loginUser.fulfilled.match(resultAction)) {
        navigation.navigate('BottomNavigation');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  function InputIdHandler(Id: string) {
    setId(Id);
  }

  function InputPWHandler(Password: string) {
    setPassword(Password);
  }

  function handleSignup() {
    navigation.navigate('SignUp');
  }

  function handleSearchId() {
    Alert.alert('ID찾기');
  }

  function handleSearchPW() {
    Alert.alert('PW찾기');
  }

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <TradeMark />
      </View>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>패패오더</Text>
        <Text style={styles.semiTitle}>패스트 주문, 패스트 식사</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="아이디"
        placeholderTextColor="#AAA"
        onChangeText={InputIdHandler}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        placeholderTextColor="#AAA"
        onChangeText={InputPWHandler}
        secureTextEntry={!isPasswordVisible}
      />

      <View style={styles.checkWrap}>
        <TouchableOpacity onPress={() => setChecked(!checked)}>
          {checked ? <CheckedBox /> : <UnCheckedBox />}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>자동 로그인</Text>
      </View>
      
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      
      <TouchableOpacity 
        style={styles.buttonBox} 
        onPress={handleLogin}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? '로그인 중...' : '로그인'}
        </Text>
      </TouchableOpacity>
      
      <View style={styles.bottomTextWrap}>
        <Text style={styles.bottomText} onPress={handleSearchId}>
          아이디 찾기
        </Text>
        <Text style={styles.bottomText}>|</Text>
        <Text style={styles.bottomText} onPress={handleSearchPW}>
          비밀번호 찾기
        </Text>
        <Text style={styles.bottomText}>|</Text>
        <Text style={styles.bottomTextSign} onPress={handleSignup}>
          회원가입
        </Text>
      </View>
    </View>
  );
}