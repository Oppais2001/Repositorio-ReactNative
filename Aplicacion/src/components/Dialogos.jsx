import React, {useState} from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, Dimensions, StatusBar} from "react-native";
import Dialogos from "./Dialogos";
import { Kurono, Kato, Kishimoto, Nishi, Hojo, Sadako, Cebollin, MrCebollin } from "./ClasesDialogos";

const Main = ()=>{
    const [Indice, CambiarIndice] = useState(0);
    const [Personaje, CambiarPersonaje] = useState(require('../../assets/Img/Characters/KuronoUniforme.png'));
    const [Expresion, CambiarExpresion] = useState(require('../../assets/Img/Characters/KuronoSerio.png'));
    const MostrarPersonajes = (IndiceActual) => {
        if(Kurono.ComprobarIndice(IndiceActual)){
            if(IndiceActual<12||(IndiceActual>13&&IndiceActual<43)||IndiceActual==47||
            IndiceActual==54||IndiceActual==57||(IndiceActual>59&&IndiceActual<69)||
            (IndiceActual>71&&IndiceActual<83)){
                console.log("Serio")
                Kurono.Expresion = "Serio";
            }else if(IndiceActual==43||IndiceActual==46||IndiceActual==50||IndiceActual==51
                ||IndiceActual==58||IndiceActual==69||IndiceActual==71){
                console.log("Nervioso")
                Kurono.Expresion = "Nervioso";
            }else if(IndiceActual==13){
                console.log("Feliz")
                Kurono.Expresion = "Feliz";
            }
    /*Eventos Referentes a la Ropa de los personajes independiente de las decisiones */
            if(IndiceActual<58){
                Kurono.Ropa = "Uniforme";
            }else if(IndiceActual==58){
                Kurono.CambiarRopa("Camisa");
                AnimacionActiva = true;
            }else if(IndiceActual<80){
                Kurono.Ropa = "Camisa";
            }
            var rutaPersonaje = Kurono.MostrarPersonaje();
            var rutaExpresion = Kurono.MostrarExpresion();
        }else if(Kato.ComprobarIndice(IndiceActual)){
            var rutaPersonaje = Kato.MostrarPersonaje();
            var rutaExpresion = Kato.MostrarExpresion();
        }else if(Kishimoto.ComprobarIndice(IndiceActual)){
            var rutaPersonaje = Kishimoto.MostrarPersonaje();
            var rutaExpresion = Kishimoto.MostrarExpresion();
        }else if(Nishi.ComprobarIndice(IndiceActual)){
            var rutaPersonaje = Nishi.MostrarPersonaje();
            var rutaExpresion = Nishi.MostrarExpresion();
        }else if(Hojo.ComprobarIndice(IndiceActual)){
            var rutaPersonaje = Hojo.MostrarPersonaje();
            var rutaExpresion = Hojo.MostrarExpresion();
        }else if(Cebollin.ComprobarIndice(IndiceActual)){
            var rutaPersonaje = Cebollin.MostrarPersonaje();
            var rutaExpresion = "";
        }else{
            Alert.alert("Falta el personaje")
        }
        CambiarPersonaje((rutaPersonaje));
        CambiarExpresion((rutaExpresion));
    }
    const Boton1 = () => {
        if(Indice<Dialogos.length){
            CambiarIndice(Indice+1)
            console.log("Posicion: " + String(Indice+1))
            console.log("Indice: " + String(Indice+2))
            const IndiceActual = Indice + 2;
            MostrarPersonajes(IndiceActual)
        }
    }
    const Boton2 = () => {
        if(Indice>0){
            CambiarIndice(Indice-1)
            const IndiceActual = Indice;
            MostrarPersonajes(IndiceActual);
        }
    }
    return (
        <>
            <StatusBar hidden={true} />
            <View style={Style.container}>
                <Image
                source={require('../../assets/Img/Backgrounds/Room.jpeg')}
                style={Style.Fondo}
                />
                <Image
                source={Personaje}
                style={Style.Ropa}
                />
                <Image
                source={Expresion}
                style={Style.Expresiones}
                />
                <TouchableOpacity onPress={Boton1}>
                    <Image source={require('../../assets/Img/Buttons/boton1.png')}
                    style={Style.boton1}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={Boton2}>
                    <Image source={require('../../assets/Img/Buttons/boton2.png')}
                    style={Style.boton2}/>
                </TouchableOpacity>
                <Text style={Style.Texto}>Proyecto Aplicacion Movil Modelo 1</Text>
            </View>
            <View style={Style.Recuadro}>
                <Text style={Style.Texto}>{Dialogos[Indice]}</Text>
            </View>
        </>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const leftPosition = windowWidth * 0.33; // Esto corresponde a 33vw
const topPosition = windowHeight * 0.33; // Esto corresponde a 33vw
const AnchoRecuadro = windowWidth * 0.5;
const AltoRecuadro = windowHeight * 0.25;
const PosicionRecuadroX = windowWidth * 0.25;
const PosicionRecuadroY = windowHeight * 0.75;
const BorderRadiusRecuadro = windowHeight * 0.03; 
const MarginTopTexto = windowHeight * 0.01;
const Style = StyleSheet.create({
    container: {display:"flex", backgroundColor: "Black"},
    Texto: {color:'white', textAlign: "center", marginTop: MarginTopTexto},
    Ropa: {height: 400,width:leftPosition, position:"absolute",top:-10,left: leftPosition},
    Expresiones: {height: 400,width:leftPosition, position:"absolute",top:-10,left: leftPosition},
    boton1: {height:topPosition,width:topPosition, position:"absolute", top: topPosition, left:topPosition*5},
    boton2: {height:topPosition,width:topPosition, position:"absolute", top: topPosition, left:15},
    Fondo: {height:windowHeight,width:windowWidth + 20, position:"absolute", top: 0, left:-10},
    Recuadro: {height: AltoRecuadro, width: AnchoRecuadro,position:"absolute",
        top:PosicionRecuadroY,left:PosicionRecuadroX,borderRadius:BorderRadiusRecuadro,
        borderWidth: 2,borderColor: "white",backgroundColor:"black"}
});
export default Main