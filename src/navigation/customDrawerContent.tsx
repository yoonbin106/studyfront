// src/navigation/customDrawerContent.tsx
import React from 'react';
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/commonjs/src";
import { Text, TouchableOpacity, View } from "react-native";
import { drawerStyles } from '../styles/drawerStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CustomDrawerContentProps = {
    setLogin:(value: boolean) => void;
    login: boolean;
} & DrawerContentComponentProps;

const CustomDrawerContent = ({ navigation, setLogin, login }: CustomDrawerContentProps) => {
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

       {/* 로그아웃 */}
       <TouchableOpacity
        style={drawerStyles.drawerItem}
        onPress={() => {
          setLogin(false);
          AsyncStorage.removeItem('isLoggedIn');
          AsyncStorage.removeItem('refresh_token');

          navigation.closeDrawer();
          navigation.reset({
            index: 0,
            routes: [{ name: login ? 'Home' : 'Auth' }],
          });
        }}
      >
        <Text style={[drawerStyles.drawerLabel, drawerStyles.drawerItemInactive]}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerContent;