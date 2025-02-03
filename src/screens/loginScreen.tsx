import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from '../styles/loginScreenStyles'


const LoginScreen = ({ setLogin, navigation }: { setLogin: (value: boolean) => void, navigation: any }) => {

  //하드코딩
  const nickname = 'aaa';
  const password = '1234';

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
