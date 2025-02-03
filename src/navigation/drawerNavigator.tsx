import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { drawerStyles } from '../styles/drawerStyles'; // 스타일 가져오기
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import SettingsScreen from '../screens/settingsScreen';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/signupScreen';
import { createStackNavigator } from '@react-navigation/stack';



// 네비게이터 타입 정의
type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  Auth: undefined;
};

type StackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createStackNavigator<StackParamList>();

const CustomDrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <View style={drawerStyles.drawerContainer}>
      <TouchableOpacity
        style={[drawerStyles.drawerItem, drawerStyles.drawerItemActive]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={[drawerStyles.drawerLabel, drawerStyles.drawerItemActive]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={drawerStyles.drawerItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={[drawerStyles.drawerLabel, drawerStyles.drawerItemInactive]}>
          Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={drawerStyles.drawerItem}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={[drawerStyles.drawerLabel, drawerStyles.drawerItemInactive]}>
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// 로그인, 회원가입
const AuthStack = ({setLogin}: { setLogin: (value: boolean) => void }) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} setLogin={setLogin} />}
      </Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

// 메인 Drawer 네비게이터
const DrawerNavigator = () => {
  const [login, setLogin] = useState(false); // 로그인 상태

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // 헤더 숨기기
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
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
