import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from '../styles/loginScreenStyles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../navigation/authStack';

type LoginScreenNavigationProp = StackNavigationProp<StackParamList, 'Login'>;

const LoginScreen = ({ setLogin }: { setLogin: (value: boolean) => void }) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<LoginScreenNavigationProp>();

    useEffect(() => {
    // 로그인 후 토큰이 있으면 닉네임과 비밀번호 필드 자동입력
    const loadCredentials = async () => {
      const token = await AsyncStorage.getItem('access_token'); // 토큰이 있으면 자동으로 입력
      if (token) {
        const storedNickname = await AsyncStorage.getItem('nickname');
        const storedPassword = await AsyncStorage.getItem('password');
        setNickname(storedNickname || '');
        setPassword(storedPassword || '');
      }
    };

    loadCredentials();
  }, []);
  

  // 로그인 처리 함수
  const handleLogin = async () => {
    console.log('로그인 시도: ', nickname, password);
  
    try {
      const userAgent = navigator.userAgent; 
  
      // 서버에 로그인 요청 보내기
      const response = await axios.post('http://192.168.45.237:3000/user/login', {
        nickname,
        password,
        userAgent
      },{
        headers: {
          'Content-Type': 'application/json', 
      }
    });
  
    const { access_token, refresh_token } = response.data; 
  
    // 로그인 정보를 AsyncStorage에 저장
    await AsyncStorage.setItem('nickname', nickname);
    await AsyncStorage.setItem('password', password);
    await AsyncStorage.setItem('access_token', access_token);
    await AsyncStorage.setItem('refresh_token', refresh_token);
  
    setLogin(true);
  
    console.log('로그인 성공');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  } catch (err) {
      console.error('로그인 실패:', err);
  }
};
  
  return <>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>로그인</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder='닉네임'
        value={nickname}
        onChangeText={setNickname}
      />

      <TextInput
        style={styles.input}
        placeholder='비밀번호'
        value={password}
        onChangeText={setPassword}
        //secureTextEntry //비번 암호화
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
        <Text style={styles.link}>회원가입</Text>
      </TouchableOpacity>

    </View>
  </>
}
export default LoginScreen;
