import React, {useEffect, useState, Component} from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import Inicio from './src/screen/Inicio.jsx';
import Dialogos from './src/screen/Dialogos.jsx';

const Stack = createNativeStackNavigator();
export default function App(){
  console.log(this.state);
  const [fonstLoaded, setFontsLoaded] = useState(false) ;
  const loadFonts = async () => {
    await Font.loadAsync({
      'Gantz': require('./assets/Fonts/gantz.ttf'),
      'Genjiro': require('./assets/Fonts/Genjiro.ttf'),
    });
    setFontsLoaded(true);
  }
  useEffect(()=> {
    if(!fonstLoaded) {
      loadFonts();
    }
  });
  if(!fonstLoaded){
    return(
      <View style={{backgroundColor:"black", height: '100%', width: '100%', position:'absolute',top:0,left:0}}>
      </View>
)
  }
    return (
      <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Inicio" 
      screenOptions={{ headerShown: false }}
      navigationBarHidden={true}
      >
        <Stack.Screen name="Inicio" component={Inicio}/>
        <Stack.Screen name="Dialogos" component={Dialogos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
