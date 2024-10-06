import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {CheckBox} from 'react-native-elements';

export default function Login(): React.JSX.Element {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  function InputIdHandler(Id: string) {
    setId(Id);
  }

  function InputPWHandler(Password: string) {
    setPassword(Password);
  }

  const handleLogin = () => {
    console.log('아이디:', id);
    console.log('비밀번호:', password);
    this.props.navigation.navigate('Main');
  };

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
      <CheckBox
        title="비밀번호 보기"
        checked={isPasswordVisible}
        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        containerStyle={styles.checkboxContainer} // 체크박스 컨테이너 스타일
        textStyle={styles.checkboxText} // 텍스트 스타일
        checkedColor="black"
        // checkedIcon=""
        // uncheckedIcon=""
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
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
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginRight: 200,
  },
  checkboxText: {
    marginLeft: 8,
    color: '#AAA',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
  },
});
