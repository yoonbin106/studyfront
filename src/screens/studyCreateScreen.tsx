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
  const [maxMembers, setMaxMembers] = useState('');
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>새로운 스터디 생성</Text>

      {/* 스터디명 입력 */}
      <Text style={styles.label}>스터디명</Text>
      <TextInput
        style={styles.input}
        placeholder="스터디명을 입력하세요"
        value={studyName}
        onChangeText={setStudyName}
      />

      {/* 최대 인원수 입력 */}
      <Text style={styles.label}>최대 인원수</Text>
      <TextInput
        style={styles.input}
        placeholder="최대 인원수를 입력하세요"
        value={maxMembers}
        onChangeText={setMaxMembers}
        keyboardType="numeric"
      />

      {/* 버튼들 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => {
            if (studyName.trim() === '' || maxMembers.trim() === '') {
              alert('스터디명과 최대 인원수를 입력해주세요.');
              return;
            }
            alert(`스터디 "${studyName}"(${maxMembers}명)를 생성했습니다.`);
            navigation.navigate('StudyScreen');
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
