import React from 'react';
import Inicio from './src/components/Inicio.jsx'
import Dialogos from './src/components/Dialogos.jsx'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

const Stack = createStackNavigator();
let customFonts = {
  'Gantz': require('./assets/Fonts/gantz.ttf'),
  'Genjiro': require('./assets/Fonts/Genjiro.ttf')
  
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render(){
    if(!this.state.fontsLoaded){
      return null;
    }
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Inicio} />
        <Stack.Screen name="Screen1" component={Dialogos} />
        <Stack.Screen name="Screen2" component={Dialogos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}
