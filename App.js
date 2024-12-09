import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // 안드로이드 에뮬레이터 -> localhost 대신 10.0.2.2 사용
        const response = await fetch('http://10.0.2.2:3000/data');  // NestJS 서버 주소
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <View>
      <Text>{data ? JSON.stringify(data) : 'Loading...'}</Text>
    </View>
  );
};

export default App;
