// src/navigation/AuthStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/signupScreen';

type StackParamList = {
    Login: undefined;
    SignUp: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const AuthStack = ({ setLogin } : { setLogin: (value: boolean)=> void }) => {
  return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login">
      {(props) => <LoginScreen {...props} setLogin={setLogin} navigation={props.navigation} />}
    </Stack.Screen>
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
  );
};

export default AuthStack;
