import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from '../styles/signUpScreenStyles';
import axios from 'axios';

const SignUpScreen = ({ navigation }: { navigation: any }) => {

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);

  // 회원가입 처리
  const handleSignUp = async () =>{

    if(nickname.trim()==='' || password.trim()===''){
      alert('사용하실 닉네임과 비밀번호를 입력해주세요.');
      return;
    }
    if(password !== confirmPassword){
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try{
      const response=await axios.post('http://10.0.2.2:3000/user',{  // 에뮬레이터 IP로 수정
        nickname: nickname,
        password: password
      });
      
      if(response.status===201){
        alert('회원가입 성공');
        navigation.replace('Login',{nickname});
      }
    } catch(err) {
      alert(`회원가입에 실패. 다시 시도해주세요.${err}`);
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

      {/* 비밀번호 입력 */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder='비밀번호'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={securePassword}
        />
        <TouchableOpacity onPress={() => setSecurePassword(!securePassword)}>
          <Text style={styles.toggleText}>{securePassword ? '👀' : '🔑'}</Text>
        </TouchableOpacity>
      </View>

      {/* 비밀번호 확인 입력 */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder='비밀번호 확인'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={secureConfirmPassword}
        />
        <TouchableOpacity onPress={() => setSecureConfirmPassword(!secureConfirmPassword)}>
          <Text style={styles.toggleText}>{secureConfirmPassword ? '👀' : '🔑'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>

    </View>

    </>
}
export default SignUpScreen;
