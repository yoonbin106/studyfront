import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { drawerStyles } from '../styles/drawerStyles'; // 스타일 가져오기
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import SettingsScreen from '../screens/settingsScreen';
import { DrawerContentComponentProps } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

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

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // 헤더 숨기기
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
