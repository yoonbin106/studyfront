// src/navigation/authStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/signupScreen';

export type StackParamList = {
    Login: undefined;
    SignUp: undefined;
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const AuthStack = ({ setLogin } : { setLogin: (value: boolean)=> void }) => {
  return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login">
      {(props) => <LoginScreen {...props} setLogin={setLogin} />}
    </Stack.Screen>
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
  );
};

export default AuthStack;
