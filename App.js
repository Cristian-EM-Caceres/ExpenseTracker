import { StatusBar } from 'expo-status-bar';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#8AB4F8',
    background: '#0B0F14',
    card: '#111820',
    text: '#F4F7FA',
    border: '#26313D',
    notification: '#FF7B72',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={darkTheme}>
      <StackNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}