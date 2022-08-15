import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  return (

      <View>
        <Header />
        <Main />
        <StatusBar style="auto" />
      </View>
       
  );
}
