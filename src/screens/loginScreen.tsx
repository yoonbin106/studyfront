import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from '../styles/loginScreenStyles'
import { RouteProp, useRoute } from '@react-navigation/native';

// 네비게이션에서 받을 데이터의 타입 지정
type RootStackParamList = {
  Login: { nickname?: string; password?: string };
};

const LoginScreen = ({ setLogin, navigation }: { setLogin: (value: boolean) => void, navigation: any }) => {

  const route =  useRoute<RouteProp<RootStackParamList, 'Login'>>();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{
    if(route.params){
      setNickname(route.params.nickname || '');
      setPassword(route.params.password || '');
    }
  }, [route.params]);


  // 로그인 처리 
  const handleLogin = () =>{
    console.log('로그인 시도: ', nickname, password);
    setLogin(true); // 로그인 상태 변경
    navigation.replace('Home'); // 로그인 완료 시, 홈 화면으로 이동
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
        //onChangeText={setNickname}
      />

      <TextInput
        style={styles.input}
        placeholder='비밀번호'
        value={password}
        //onChangeText={setPassword}
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
