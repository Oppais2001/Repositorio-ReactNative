
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar} from "react-native";


const Inicio = ({navigation})=>{
    const Dialogos = () =>{
        navigation.navigate('Dialogos')
    }
    return(
        <>
        <StatusBar hidden={true}/>
        <View style={Style.container}>
        <View style={Style.Esfera}>
        </View>
        <Text style={{...Style.InicioTexto,...Style.Texto1}}>Gantz</Text>
        <Text style={{...Style.InicioTexto, ...Style.Texto2}}>Nexus</Text>
        <TouchableOpacity onPress={Dialogos}>
            <Text style={{...Style.Botones, ...Style.BotonInicio}}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Dialogos}>
            <Text style={{...Style.Botones, ...Style.BotonContinuar}}>Continuar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Dialogos}>
            <Text style={{...Style.Botones, ...Style.BotonAjustes}}>Ajustes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Dialogos}>
            <Text style={{...Style.Botones, ...Style.BotonGaleria}}>Galería</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Dialogos}>
            <Text style={{...Style.Botones, ...Style.BotonCreditos}}>Creditos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Dialogos}>
            <Text style={{...Style.Botones, ...Style.BotonSalir}}>Salir</Text>
        </TouchableOpacity>
        </View>
        </>
)};
const windowHeight = Dimensions.get('window').height;
const vh = windowHeight * 0.01;
const windowWidth = Dimensions.get('window').width;
const vw = windowWidth * 0.01;
const Style = StyleSheet.create({
    container: {width:windowWidth, height: windowHeight, backgroundColor: "red"},
    Esfera: {height: 50*vh, width: 50*vh, backgroundColor: "black", borderRadius: 25*vh, alignSelf:"center"},
    InicioTexto: {width:10*vw,position:"absolute",top:5*vh,
    fontFamily:'Gantz',fontSize: 18*vh,color:'white', textAlign: "center"},
    Texto1: {left:10*vw},
    Texto2: {width:16*vh,left:80*vw},
    Botones: {height:8*vh, width: 30*vw,position:"absolute",left: 33*vw,
    textAlign: "center", fontFamily: 'Genjiro', fontSize: 8*vh,color: "white",
    backgroundColor: "black", borderRadius: 5*vh},
    BotonInicio:{top: 5*vh},
    BotonContinuar:{top: 14*vh},
    BotonAjustes:{top: 23*vh},
    BotonGaleria:{top: 32*vh},
    BotonCreditos:{top: 41*vh},
    BotonSalir:{top: 50*vh}
});
export default Inicio
