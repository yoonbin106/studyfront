// src/navigation/drawerNavigator.tsx
import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomDrawerContent from './customDrawerContent';
import AuthStack from './authStack';

import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import SettingsScreen from '../screens/settingsScreen';

const Drawer = createDrawerNavigator();

// 메인 Drawer 네비게이터
const DrawerNavigator = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // 앱 시작 시 저장된 로그인 상태
    const checkLoginStatus = async () => {
      const storedLoginStatus = await AsyncStorage.getItem('isLoggedIn');
      if (storedLoginStatus === 'true') {
        setLogin(true);
      }
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    // 로그인 상태 변경 시 AsyncStorage에 저장
    AsyncStorage.setItem('isLoggedIn', JSON.stringify(login));
  }, [login]);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // 헤더 숨기기
      }}
      drawerContent={(props) => (
        <CustomDrawerContent
        {...props}
        setLogin={setLogin}
        login={login}
      />
      )}
    >
      {/* 로그인 상태가 true일 때만 DrawerNavigator에 포함 */}
      {login ? (
        <>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </>
      ) : (
        // 로그인 상태가 아니면 로그인 및 회원가입 화면 먼저 보이기
        <Drawer.Screen name="Auth">
          {()=> <AuthStack setLogin={setLogin} />}
        </Drawer.Screen>
      )}
    </Drawer.Navigator>
  );
};


export default DrawerNavigator;
