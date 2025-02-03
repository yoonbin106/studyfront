module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin',
    [
      '@babel/plugin-transform-private-methods', // Plugin name
      { loose: true }, // Plugin options
    ],
  ],// 이 플러그인 추가-이건 꼭 플러그인 배열의 마지막에 추가해야한대대
  
};
