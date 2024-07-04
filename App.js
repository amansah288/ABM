import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from "./screeens/Splash Screen";
import HomeScreen from "./screeens/HomeScreen";
import { useEffect, useState } from "react";

export default function App() {
  const [Splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  });

  return <>{Splash ? <SplashScreen /> : <HomeScreen />}</>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
