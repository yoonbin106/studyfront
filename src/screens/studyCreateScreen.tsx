import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/studyCreateStyles';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type DrawerParamList = {
  Home: undefined;
  StudyScreen: undefined;
  StudyCreateScreen: undefined;
};

const StudyCreateScreen = () => {
  const [studyName, setStudyName] = useState('');
  const [studyPassword, setStudyPassword] = useState('');
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>새로운 스터디 생성</Text>

      {/* 스터디 이름 필수 */}
      <Text style={styles.label}>스터디 이름</Text>
      <TextInput
        style={styles.input}
        placeholder="스터디명을 입력하세요"
        value={studyName}
        onChangeText={setStudyName}
      />
      {/* 스터디 비밀번호 필수 X */}
      <Text style={styles.label}>스터디 비밀번호를 입력하세요</Text>
      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력하세요"
        value={studyPassword}
        onChangeText={setStudyPassword}
        keyboardType="numeric"
      />

      {/* 버튼들 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => {
            if (studyName.trim() === '' || studyPassword.trim() === '') {
              alert('스터디명과 최대 인원수를 입력해주세요.');
              return;
            }
            alert(`스터디 "${studyName}" 생성 완료!`);
            navigation.navigate('Home');
          }}
        >
          <Text style={styles.buttonText}>스터디 생성</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>취소</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StudyCreateScreen;
