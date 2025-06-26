import HomeScreen from 'blanco/src/assets/screens/HomeScreen.js';
import SplashScreen from 'blanco/src/assets/screens/SplashScreen.js';
import { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native-web';

export default function App(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect (()=> {
    const timer = setTimeout(() =>{
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{flex:1}}>
      <StatusBar hidden/>
      {isLoading ? <SplashScreen/> : <HomeScreen/>}
    </View>
  );
}