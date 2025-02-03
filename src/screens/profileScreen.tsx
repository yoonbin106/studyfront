import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/profileScreenStyles'; 

const ProfileScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>프로필 화면</Text>
    </View>
  );
};

export default ProfileScreen;
