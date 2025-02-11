import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from '../styles/signUpScreenStyles';
import axios from 'axios';

const SignUpScreen = ({ navigation }: { navigation: any }) => {

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 회원가입 처리
  const handleSignUp = async () =>{
    // 비밀번호 재확인
    if(password != confirmPassword){
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    try{
      const response=await axios.post('http://192.168.45.237:3000/user',{
        nickname: nickname,
        password: password
      });
      
      if(response.status===201){
        console.log('회원가입 성공:', response.data);
        navigation.replace('Login',{nickname: nickname,password: password});
      }
    } catch(err) {
      console.log('회원가입 실패:', err);
      alert(`회원가입에 실패했습니다. 다시 시도해주세요.${err}${nickname}${password}`);
    }
  };

  return <>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>회원가입</Text>
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

      <TextInput
        style={styles.input}
        placeholder='비밀번호 확인'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        //secureTextEntry //비번 암호화
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>

    </View>

    </>
}
export default SignUpScreen;
