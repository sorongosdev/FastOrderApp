import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Checkbox, Provider as PaperProvider} from 'react-native-paper';

interface LoginProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

export default function Login({navigation}: LoginProps): React.JSX.Element {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  function InputIdHandler(Id: string) {
    setId(Id);
  }

  function InputPWHandler(Password: string) {
    setPassword(Password);
  }

  const handleLogin = () => {
    console.log('아이디:', id);
    console.log('비밀번호:', password);
    navigation.navigate('Main');
  };

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
    <View style={styles.wrap}>
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
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          color ={checked ? 'orange' : ''}
        />
        <Text style={styles.checkboxText}>로그인 정보 저장</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      <View style={styles.bottomTextLine}>
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

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 56,
    width: 326,
    borderColor: '#B5B5B5',
    borderWidth: 1,
    marginTop: 9,
    paddingLeft: 21,
  },
  button: {
    height: 56,
    width: 326,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#939393',
    fontSize: 18,
    fontWeight: 'normal',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 320,
    marginTop: 14,
  },
  checkboxText: {
    color: '#AAA',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  bottomTextLine: {
    flexDirection: 'row',
    width: 326,
    justifyContent: 'center',
    gap: 10,
    marginTop: 26,
  },
  bottomText: {
    color: '#7F7F7F',
    textAlign: 'right',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  bottomTextSign: {
    color: '#7F7F7F',
    textAlign: 'right',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: 1.4,
  },
});
