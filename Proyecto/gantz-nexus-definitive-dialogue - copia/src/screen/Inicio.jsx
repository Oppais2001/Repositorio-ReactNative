
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, Dimensions, StatusBar} from "react-native";
import { Asset } from 'expo-asset';
const Inicio = ({navigation})=>{
    const [ready, setReady] = useState(false);
    const [EsferaCerrada, setEsferaCerrada] = useState(null);
    const [EsferaAbierta, setEsferaAbierta] = useState(null);
    useEffect(()=>{
        const CargadoImagenes = (async () => {
            const EsferaCerradaImage = Asset.fromModule(require('../../assets/img/Backgrounds/Esfera-Cerrada.png'))
            const EsferaAbiertaImage = Asset.fromModule(require('../../assets/img/Backgrounds/Esfera-Abierta.png'))
            try {
                await Promise.all[EsferaCerradaImage,EsferaAbiertaImage];
                setEsferaCerrada(EsferaCerradaImage);
                setEsferaAbierta(EsferaAbierta);
                setReady(true);
            } catch (error) {
                console.error('Error al descargar las imágenes', error);
            }
        });CargadoImagenes();
    }, []);
    if(!ready){
        <View style={Style.PreCarga}></View>
    }
    const Dialogos = () =>{
        navigation.navigate('Dialogos')
    }
    return(
        <>
        <StatusBar hidden={true}/>
        <View style={Style.container}>
        <Image source={{...EsferaCerrada}} style={Style.Esfera}/>
        <Text style={{...Style.InicioTexto,...Style.Texto1}} transition={1000}>Gantz</Text>
        <Text style={{...Style.InicioTexto, ...Style.Texto2}} transition={1000}>Nexus</Text>
        <TouchableWithoutFeedback onPress={Dialogos}>
            <Text style={{...Style.Botones, ...Style.BotonInicio}}>Inicio</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Dialogos}>
            <Text style={{...Style.Botones, ...Style.BotonContinuar}}>Continuar</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Dialogos}>
            <Text style={{...Style.Botones, ...Style.BotonAjustes}}>Ajustes</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Dialogos}  >
            <Text style={{...Style.Botones, ...Style.BotonSalir}}>Salir</Text>
        </TouchableWithoutFeedback>
        </View>
        </>
)};
const windowHeight = Dimensions.get('window').height;
const vh = windowHeight * 0.01;
const windowWidth = Dimensions.get('window').width;
const vw = windowWidth * 0.01;
const Style = StyleSheet.create({
    PreCarga: {
        height: 100*vh,
        width: 107*vw,
        backgroundColor: 'red'
    },
    container: {
        width:windowWidth + 7*vw,
        height: windowHeight,
        backgroundColor: "red"
    },
    Esfera: {
        height: 100*vh,
        width: 100*vh,
        position:'absolute',
        top: -20*vh,
        alignSelf:"center"
    },
    InicioTexto: {
        position:"absolute",
        top:1*vh,
        fontFamily:'Genjiro',
        fontSize: 24*vh,
        color:'white',
        textAlign: "center",
        lineHeight: 20*vh
    },
    Texto1: {
        width:8*vw,
        left:15*vw
    },
    Texto2: {
        width:7.5*vw,
        left: 82.5*vw
    },
    Botones: {
        height:8*vh,
        width: 30*vw,
        position:"relative",
        alignSelf:'center',
        textAlign: 'center',
        fontFamily: 'Genjiro',
        fontSize: 8*vh,
        color: "white",
        backgroundColor: "black",
        borderRadius: 5*vh
    },
    BotonInicio:{
        top: 62*vh
    },
    BotonContinuar:{
        top: 63*vh
    },
    BotonAjustes:{
        top: 64*vh
    },
    BotonSalir:{
        top: 65*vh
    }
});
export default Inicio
