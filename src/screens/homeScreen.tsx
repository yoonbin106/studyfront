import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { styles } from '../styles/homeScreenStyles';

interface StudyData {
  name: string;
  notice: string;
  dDay: string;
}

const HomeScreen = () => {
  const [study, setStudy] = useState<StudyData | null>(null); // API 데이터 저장
  const [error, setError] = useState<string | null>(null); // 에러 상태 관리

  // 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/home'); // API 호출
        setStudy(response.data.study);
      } catch (err: any) {
        console.error('Failed to fetch data:', err.message); // 에러 출력
        setError('Failed to load study data.'); // 에러 메시지 설정
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text> {/* 에러 메시지 표시 */}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text>버거 메뉴바</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{study?.name || '스터디 이름'}</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text>어플 로그</Text>
        </TouchableOpacity>
      </View>

      {/* 공지 및 D+DAY 영역 */}
      <View style={styles.noticeContainer}>
        <TouchableOpacity style={styles.noticeButton}>
          <Text>{study?.notice || '공지 없음'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dDayButton}>
          <Text>{study?.dDay || 'D+DAY 없음'}</Text>
        </TouchableOpacity>
      </View>

      {/* 캘린더 영역 */}
      <View style={styles.calendarContainer}>
        <Text style={styles.calendarTitle}>캘린더</Text>
        <Text>스터디가 없습니다</Text>
      </View>

      {/* 하단 버튼들 */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text>채팅</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text>새로운 스터디 생성</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text>기상 인증</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text>공부 시작 버튼</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
