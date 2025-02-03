import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/settingsScreenStyles'; 

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>설정 화면</Text>
    </View>
  );
};

export default SettingsScreen;
