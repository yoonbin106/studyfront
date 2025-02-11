import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from '../styles/loginScreenStyles'
import { RouteProp, useRoute } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements/dist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// 네비게이션에서 받을 데이터의 타입 지정
type RootStackParamList = {
  Login: { nickname?: string; password?: string };
};

const LoginScreen = ({ setLogin, navigation }: { setLogin: (value: boolean) => void, navigation: any }) => {
  const route =  useRoute<RouteProp<RootStackParamList, 'Login'>>();

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false); //자동 로그인 상태

  useEffect(() => {
    // 자동 로그인
    const checkAutoLogin = async () => {
      const savedToken = await AsyncStorage.getItem('refresh_token');
      if (savedToken && autoLogin) {
        handleAutoLogin(savedToken);
      } 
    };
    checkAutoLogin();
  }, [autoLogin]);

  useEffect(()=>{
    if(route.params){
      setNickname(route.params.nickname || '');
      setPassword(route.params.password || '');
    }else {
      // 로그아웃 후 저장된 정보 복원
      const loadLoginInfo= async () => {
        const savedNickname=await AsyncStorage.getItem('nickname');
        const savedPassword=await AsyncStorage.getItem('password');
        if(savedNickname && savedPassword) {
          setNickname(savedNickname);
          setPassword(savedPassword);
        }
      };
      loadLoginInfo();
    }
  }, [route.params]);


  // 자동 로그인
  const handleAutoLogin = async (refreshToken:string)=>{
    try{
      const response=await axios.post('http://192.168.45.237:3000/token/auto-login',{
        refresh_token: refreshToken,
      });

      const { access_token } = response.data;
      await AsyncStorage.setItem('access_token',access_token);
      setLogin(true);

      console.log('자동로그인 성공');
      navigation.reset({
        index:0,
        routes: [{name:"Home"}],
      });
    } catch(err) {
      console.error('자동로그인 실패:', err);
    }
  };


  // 로그인 처리 
  const handleLogin = async() =>{
    console.log('로그인 시도: ', nickname, password);

    // 로그인 정보를 AsyncStorage에 저장
    await AsyncStorage.setItem('nickname', nickname);
    await AsyncStorage.setItem('password', password);

    setLogin(true); // 로그인 상태 변경
    navigation.reset({
      index:0,
      routes: [{name:"Home"}],
    });
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

      <View style={styles.auto}>
        <CheckBox
          checked={autoLogin}
          onPress={()=> setAutoLogin(!autoLogin)}
          containerStyle={{ padding: 0, margin: 0 }}/>
        <Text style={styles.autoText}>자동 로그인</Text>
      </View>

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
