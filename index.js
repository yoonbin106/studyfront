/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App.tsx';
import {name as appName} from './app.json';
import 'react-native-reanimated';

AppRegistry.registerComponent(appName, () => App);
