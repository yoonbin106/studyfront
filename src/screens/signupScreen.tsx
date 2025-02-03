import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from '../styles/signupScreenStyles';

const SignUpScreen = () => {

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 회원가입 처리
  const handleSignUp = () =>{
    // 비밀번호 재확인
    if(password != confirmPassword){
      console.log('비밀번호가 일치하지 않습니다.');
      return;
    }
    console.log('회원가입 시도: ', nickname, password);
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

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.link}>로그인</Text>
      </TouchableOpacity>

    </View>

    </>
}
export default SignUpScreen;
