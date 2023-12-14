import { StyleSheet, Text, View , Dimensions, TextInput, Alert, TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
/*Navegador inicial de la app*/
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Login" 
      screenOptions={{ headerShown: false }}
      navigationBarHidden={true}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*Navegador hacia el login*/
const LoginScreen = ({navigation})=>{
  const [correo, setCorreo] = useState('');
  const [key, setKey] = useState('');
  /*Validacion Correo*/
  const ValidacionCorreo = () =>{
    var arroba = false;
    var punto = false;
    for(let i=0; i<correo.length; i++){
      if(correo[i]=='@'){
        arroba = true
      }else if(correo[i]=='.'){
        punto = true
      }
    }
    if(arroba&&punto){
      return true
    }
    return false
  }
  /*Validacion de contraseña*/
  const ValidacionKey = () =>{
    var Mayusculas = false;
    var Numeros = false;
    for(let i=0; i<key.length; i++){
      if(key[i]=='1'||key[i]=='2'||key[i]=='3'||key[i]=='4'||key[i]=='5'||key[i]=='6'||key[i]=='7'||key[i]=='8'
      ||key[i]=='9'||key[i]=='10'){
        Numeros = true;
      }else if(key[i]=='Q'||key[i]=='W'||key[i]=='E'||key[i]=='R'||key[i]=='T'||key[i]=='Y'||key[i]=='U'||
      key[i]=='I'||key[i]=='O'||key[i]=='P'||key[i]=='A'||key[i]=='S'||key[i]=='D'||key[i]=='F'||key[i]=='G'||
      key[i]=='H'||key[i]=='J'||key[i]=='K'||key[i]=='L'||key[i]=='Ñ'||key[i]=='Z'||key[i]=='X'||key[i]=='C'||
      key[i]=='V'||key[i]=='B'||key[i]=='N'||key[i]=='M'){
        Mayusculas = true
      }
    }
    if(Mayusculas&&Numeros){
      return true
    }
    return false
  }
  /*Validacion completa*/
  const Validacion = () => {
    const Correo = ValidacionCorreo();
    const Key = ValidacionKey();
    if(!Correo){
      Alert.alert('Correo Incorrecto')
    }else if(!Key){
      Alert.alert('Contraseña Incorrecta')
    }else{
      navigation.navigate('Home')
    }
  }
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Login</Text>
      <TextInput
       style={estilos.entrada1}
       onChangeText={setCorreo}
       value={correo}
       numberOfLines={4}
       maxLength={20}
       placeholder="Correo"
       keyboardType="email"
      ></TextInput>
      <TextInput
       style={estilos.entrada2}
       onChangeText={setKey}
       value={key}
       numberOfLines={4}
       maxLength={20}
       placeholder="Contaseña"
       keyboardType="default"
      >
      </TextInput>
      <MaterialIcons name="email" size={24} color="white" style={estilos.Icono1}/>
      <TouchableWithoutFeedback onPress={Validacion}>
          <Text style={estilos.TextoBoton1}>Login</Text>
      </TouchableWithoutFeedback>
      <FontAwesome name="lock" size={24} color="white" style={estilos.Icono2}/>
      <TouchableWithoutFeedback onPress={null}>
          <Text style={estilos.TextoBoton2}>¿Olvidaste tu contraseña?</Text>
      </TouchableWithoutFeedback>
      <MaterialIcons name="g-translate" size={24} color="white" style={estilos.Icono3}/>
      <AntDesign name="facebook-square" size={24} color="white" style={estilos.Icono4}/>
    </View>
  );
}
/*Navegador hacia el home*/
function HomeScreen({navigation}) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Home Screen</Text>
    </View>
  );
}
/*Uso de dimensiones de pantalla*/
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const vh = windowHeight * 0.01;
const vw = windowWidth * 0.01;
console.log(windowHeight,windowWidth)
/*Definicion de los estilos de los elementos de la app*/
const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor:'skyblue',
    alignItems: 'center',
  },
  titulo: {
    color:'white',
    fontSize: 5*vh,
    position: 'relative',
    top: 20*vh
  },
  entrada1: {
    textAlign: 'center',
    color:'white',
    borderColor: 'white',
    borderWidth: 0.5*vh,
    width: 90*vw,
    height: 10*vh,
    position: 'absolute',
    top: 30*vh
  },
  entrada2: {
    textAlign:'center',
    color:'white',
    borderColor: 'white',
    borderWidth: 0.5*vh,
    width: 90*vw,
    height: 10*vh,
    position: 'absolute',
    top: 45*vh
  },
  TextoBoton1: {
    width: 10*vh,
    height: 5*vh,
    backgroundColor: 'white',
    borderRadius: 2*vh,
    textAlign: 'center',
    position: 'absolute',
    top: 65*vh
  },
  TextoBoton2: {
    fontSize: 3*vw,
    width: 33*vh,
    height: 5*vh,
    textAlign: 'center',
    position: 'absolute',
    top: 58*vh,
    left: 42*vw
  },
  Icono1: {
    position:'absolute',
    top: 33*vh,
    left: 10*vw
  },
  Icono2: {
    position:'absolute',
    top: 48*vh,
    left: 10*vw
  },
  Icono3: {
    position:'absolute',
    top: 75*vh,
    left: 55*vw
  },
  Icono4: {
    position:'absolute',
    top: 75*vh,
    left: 35*vw
  }
});
