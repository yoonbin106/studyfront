import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/homeScreen'; // 홈 화면 가져오기
import LoginScreen from './src/screens/loginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* 홈 화면 */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: '홈 화면' }} // 헤더에 '홈 화면' 표시
        />
        {/* 로그인 */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: '로그인' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
