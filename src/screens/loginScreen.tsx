import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from '../styles/loginScreenStyles'
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Main: undefined; // DrawerNavigator 전체를 가리킴
  SignUp: undefined;
};


const LoginScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  //const [nickname, setNickname] = useState('');
  //const [password, setPassword] = useState('');

  //하드코딩
  const nickname = 'aaa';
  const password = '1234';

  // 로그인 처리 
  const handleLogin = () =>{
    console.log('로그인 시도: ', nickname, password);
    navigation.navigate('Main');
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

      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SignUp')}>
        <Text style={styles.link}>회원가입</Text>
      </TouchableOpacity>

    </View>

    </>
}
export default LoginScreen;
