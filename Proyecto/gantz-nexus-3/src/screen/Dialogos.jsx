import React, {useEffect, useState} from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, Dimensions, StatusBar} from "react-native";
import Dialogos from "../components/ListaDialogos";
import Carga from "./Carga";
import { Kurono, Kato, Kishimoto, Nishi, Hojo, Sadako, Cebollin, MrCebollin } from "../components/ClasesDialogos";
  
const Main = ()=>{
    const [Indice, CambiarIndice] = useState(1);
    /* Ropas */
        /* Kurono */
    const [KuronoUniforme, setKuronoUniforme] = useState(1);
    const [KuronoUniformeEnojado, setKuronoUniformeEnojado] = useState(0);
    const [KuronoCamisa, setKuronoCamisa] = useState(0);
    const [KuronoCamisaEnojado, setKuronoCamisaEnojado] = useState(0);
    const [KuronoTraje, setKuronoTraje] = useState(0);
    const [KuronoTrajeEnojado, setKuronoTrajeEnojado] = useState(0);
    const [KuronoPoleron, setKuronoPoleron] = useState(0);
        /* Kato */
    const [KatoUniforme, setKatoUniforme] = useState(0);
    const [KatoTraje, setKatoTraje] = useState(0);
    const [KatoTrajeEnojado, setKatoTrajeEnojado] = useState(0);
        /* Kishimoto */
    const [KishimotoD, setKishimotoD] = useState(0);
    const [KishimotoUniforme, setKishimotoUniforme] = useState(0);
    const [KishimotoTraje, setKishimotoTraje] = useState(0);
    const [KishimotoColegial, setKishimotoColegial] = useState(0);
        /* Nishi */
    const [NishiTraje, setNishiTraje] = useState(0);
    /* Expresiones */
        /* Kurono */
    const [KuronoSerio, setKuronoSerio] = useState(1);
    const [KuronoNervioso, setKuronoNervioso] = useState(0);
    const [KuronoFeliz, setKuronoFeliz] = useState(0);
    const [KuronoTriste, setKuronoTriste] = useState(0);
    const [KuronoSorprendido, setKuronoSorprendido] = useState(0);
        /* Kato */
    const [KatoSerio, setKatoSerio] = useState(0);
    const [KatoNervioso, setKatoNervioso] = useState(0);
    const [KatoFeliz, setKatoFeliz] = useState(0);
    const [KatoTriste, setKatoTriste] = useState(0);
    const [KatoSorprendido, setKatoSorprendido] = useState(0);
        /* Kishimoto */
    const [KishimotoSeria, setKishimotoSeria] = useState(0);
    const [KishimotoNerviosa, setKishimotoNerviosa] = useState(0);
    const [KishimotoFeliz, setkishimotoFeliz] = useState(0);
    const [KishimotoTriste, setKishimotoTriste] = useState(0);
    const [KishimotoParpadeo1, setKishimotoParpadeo1] = useState(0);
    const [KishimotoParpadeo2, setKishimotoParpadeo2] = useState(0);
    const [KishimotoParpadeo3, setKishimotoParpadeo3] = useState(0);
        /* Nishi */
    const [NishiSerio, setNishiSerio] = useState(0);
        /* Perro */
    const [Perro, setPerro] = useState(0);
    /* Decisiones */
    const [Decision1, MostrarDecision1] = useState(0);
    const [Decision2, MostrarDecision2] = useState(0);
    const BorrarRopa = () =>{
        console.log("Borrado Ropa")
        /*Kurono*/
        setKuronoUniforme(0);
        setKuronoUniformeEnojado(0);
        setKuronoCamisa(0);
        setKuronoCamisaEnojado(0);
        setKuronoTraje(0);
        setKuronoTrajeEnojado(0);
        setKuronoPoleron(0);
        /*Kato*/
        setKatoUniforme(0);
        setKatoTraje(0);
        setKatoTrajeEnojado(0);
        /*Kishimoto*/
        setKishimotoD(0);
        setKishimotoUniforme(0);
        setKishimotoTraje(0);
        setKishimotoColegial(0);
        /*Nishi*/
        setNishiTraje(0);
    }
    const BorrarExpresion = () =>{
        console.log("Borrado Expresion")
        /*Kurono*/
        setKuronoSerio(0);
        setKuronoFeliz(0);
        setKuronoNervioso(0);
        setKuronoSorprendido(0);
        setKuronoTriste(0);
        /*Kato*/
        setKatoSerio(0);
        setKatoFeliz(0);
        setKatoNervioso(0);
        setKatoSorprendido(0);
        setKatoTriste(0);
        /*Kishimoto*/
        setKishimotoSeria(0);
        setkishimotoFeliz(0);
        setKishimotoNerviosa(0);
        setKishimotoTriste(0);
        setKishimotoParpadeo1(0);
        setKishimotoParpadeo2(0);
        setKishimotoParpadeo3(0);
        /*Nishi*/
        setNishiSerio(0);
    }
    const MostrarPersonajes = (IndiceActual) => {
        if(Kurono.ComprobarIndice(IndiceActual)){
            console.log("Kurono")
            if(IndiceActual<12||(IndiceActual>13&&IndiceActual<43)||IndiceActual==47||
            IndiceActual==57||(IndiceActual>59&&IndiceActual<69)||
            (IndiceActual>71&&IndiceActual<83)){
                console.log("Serio");
                if(KuronoSerio==0){
                    BorrarExpresion();
                    setKuronoSerio(1);
                }
            }else if(IndiceActual==43||IndiceActual==46||IndiceActual==58||IndiceActual==69||IndiceActual==71){
                console.log("Nervioso")
                if(KuronoNervioso==0){
                    BorrarExpresion();
                    setKuronoNervioso(1);
                }            
            }else if(IndiceActual==13){
                console.log("Feliz")
                if(KuronoFeliz==0){
                    BorrarExpresion();
                    setKuronoFeliz(1);
                }                  
            }else if(IndiceActual==50||IndiceActual==51||IndiceActual==54){
                console.log("Sorprendido")
                if(KuronoSorprendido==0){
                    BorrarExpresion();
                    setKuronoSorprendido(1);
                }                   
            }
    /*Eventos Referentes a la Ropa de los personajes independiente de las decisiones */
            if(IndiceActual<58){
                console.log("Uniforme");
                if(KuronoUniforme==0){
                    BorrarRopa();
                    setKuronoUniforme(1);
                }
            }else if(IndiceActual==58){
                console.log("Animación Camisa");
                if(KuronoCamisa==0){
                    BorrarRopa();
                    setKuronoCamisa(1);
                }
            }else if(IndiceActual<80){
                console.log("Camisa");
                if(KuronoCamisa==0){
                    BorrarRopa();
                    setKuronoCamisa(1);
                }
            }else{
                console.log("Camisa");
                if(KuronoCamisa==0){
                    BorrarRopa();
                    setKuronoCamisa(1);
                }
            }
        }else if(Kato.ComprobarIndice(IndiceActual)){
            console.log("Kato")
            if(IndiceActual<91){
                console.log("Uniforme")
                if(KatoUniforme==0){
                    BorrarRopa();
                    setKatoUniforme(1);
                }
            }
            if(IndiceActual==12||IndiceActual==15){
                console.log("Nervioso");
                if(KatoNervioso==0){
                    BorrarExpresion();
                    setKatoNervioso(1);
                }
            }else if(IndiceActual==4||IndiceActual==39||IndiceActual==44||IndiceActual==48){
                console.log("Serio");
                if(KatoSerio==0){
                    BorrarExpresion();
                    setKatoSerio(1);
                }
            }else if(IndiceActual==41||IndiceActual==45){
                console.log("Feliz");
                if(KatoFeliz==0){
                    BorrarExpresion();
                    setKatoFeliz(1);
                }            
            }else if(IndiceActual==52||IndiceActual==55){
                console.log("Sorprendido");
                if(KatoSorprendido==0){
                    BorrarExpresion();
                    setKatoSorprendido(1);
                }            
            }else{
                console.log("Serio");
                if(KatoSerio==0){
                    BorrarExpresion();
                    setKatoSerio(1);
                }
            }
        }else if(Kishimoto.ComprobarIndice(IndiceActual)){
            console.log("Kishimoto")
            if(IndiceActual<94){
                if(IndiceActual==53||IndiceActual==56){
                    if(KishimotoD==0){
                        BorrarRopa();
                        setKishimotoD(1);
                    }
                }else if(IndiceActual==59){
                    console.log("Uniforme")
                    if(KishimotoUniforme==0){
                        BorrarRopa();
                        setKishimotoUniforme(1);
                    }
                }
                if(IndiceActual==53){
                    if(KishimotoParpadeo1==0){
                        BorrarExpresion();
                        setKishimotoParpadeo1(1);
                    }  
                }else if(IndiceActual==56){
                    if(KishimotoParpadeo2==0){
                        BorrarExpresion();
                        setKishimotoParpadeo2(1);
                    }
                }else{
                    if(KishimotoSeria==0){
                        BorrarExpresion();
                        setKishimotoSeria(1);
                    }
                }
            }
        }else if(Nishi.ComprobarIndice(IndiceActual)){
            console.log("Nishi")
            if(NishiTraje==0){
                BorrarRopa();
                setNishiTraje(1);
            }
            if(NishiSerio==0){
                BorrarExpresion();
                setNishiSerio(1);
            }
        }else if(Decision1.ComprobarIndice(IndiceActual)){
            console.log('Decisión 1')
        }
        /*}else if(Hojo.ComprobarIndice(IndiceActual)){
            var rutaPersonaje = Hojo.MostrarPersonaje();
            var rutaExpresion = Hojo.MostrarExpresion();
        }else if(Cebollin.ComprobarIndice(IndiceActual)){
            var rutaPersonaje = Cebollin.MostrarPersonaje();
            var rutaExpresion = "";
        }else{
            Alert.alert("Falta el personaje")
        */
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
            console.log("Posicion: " + String(Indice-1))
            console.log("Indice: " + String(Indice+2))
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
                {/* Ropa */}
                {/* Kurono */}
                <Image
                source={require('../../assets/Img/Characters/KuronoUniforme.png')}
                style={{...Style.Ropa,opacity:KuronoUniforme}}
                />
                <Image
                source={require('../../assets/Img/Characters/KuronoUniformeEnojado.png')}
                style={{...Style.Ropa,opacity:KuronoUniformeEnojado}}
                />
                <Image
                source={require('../../assets/Img/Characters/KuronoCamisa.png')}
                style={{...Style.Ropa,opacity:KuronoCamisa}}
                />
                <Image
                source={require('../../assets/Img/Characters/KuronoCamisaEnojado.png')}
                style={{...Style.Ropa,opacity:KuronoCamisaEnojado}}
                />
                <Image
                source={require('../../assets/Img/Characters/KuronoTraje.png')}
                style={{...Style.Ropa,opacity:KuronoTraje}}
                />
                <Image
                source={require('../../assets/Img/Characters/KuronoTrajeEnojado.png')}
                style={{...Style.Ropa,opacity:KuronoTrajeEnojado}}
                />
                {/* Kato */}
                <Image
                source={require('../../assets/Img/Characters/KatoUniforme.png')}
                style={{...Style.Ropa,opacity:KatoUniforme}}
                />
                <Image
                source={require('../../assets/Img/Characters/KatoTraje.png')}
                style={{...Style.Ropa,opacity:KatoTraje}}
                />
                {/*Kishimoto*/}
                <Image
                source={require('../../assets/Img/Characters/Kishimoto.png')}
                style={{...Style.Ropa,opacity:KishimotoD}}
                />
                <Image
                source={require('../../assets/Img/Characters/KishimotoUniforme.png')}
                style={{...Style.Ropa,opacity:KishimotoUniforme}}
                />
                <Image
                source={require('../../assets/Img/Characters/KishimotoTraje.png')}
                style={{...Style.Ropa,opacity:KishimotoTraje}}
                />
                <Image
                source={require('../../assets/Img/Characters/KishimotoColegiala.png')}
                style={{...Style.Ropa,opacity:KishimotoColegial}}
                />
                {/* Nishi */}
                <Image
                source={require('../../assets/Img/Characters/NishiTraje.png')}
                style={{...Style.Ropa,opacity:NishiTraje}}
                />
                {/* Expresiones */}
                {/*Kurono*/}
                <Image
                source={require('../../assets/Img/Characters/KuronoSerio.png')}
                style={{...Style.Expresiones,opacity:KuronoSerio}}
                />
                <Image
                source={require('../../assets/Img/Characters/KuronoNervioso.png')}
                style={{...Style.Expresiones,opacity:KuronoNervioso}}
                />
                <Image
                source={require('../../assets/Img/Characters/KuronoFeliz.png')}
                style={{...Style.Expresiones,opacity:KuronoFeliz}}
                />
                <Image
                source={require('../../assets/Img/Characters/KuronoTriste.png')}
                style={{...Style.Expresiones,opacity:KuronoTriste}}
                />
                <Image
                source={require('../../assets/Img/Characters/KuronoSorprendido.png')}
                style={{...Style.Expresiones,opacity:KuronoSorprendido}}
                />
                {/*Kato*/}
                <Image
                source={require('../../assets/Img/Characters/KatoSerio.png')}
                style={{...Style.Expresiones,opacity:KatoSerio}}
                />
                <Image
                source={require('../../assets/Img/Characters/KatoNervioso.png')}
                style={{...Style.Expresiones,opacity:KatoNervioso}}
                />
                <Image
                source={require('../../assets/Img/Characters/KatoFeliz.png')}
                style={{...Style.Expresiones,opacity:KatoFeliz}}
                />
                <Image
                source={require('../../assets/Img/Characters/KatoTriste.png')}
                style={{...Style.Expresiones,opacity:KatoTriste}}
                />
                <Image
                source={require('../../assets/Img/Characters/KatoSorprendido.png')}
                style={{...Style.Expresiones,opacity:KatoSorprendido}}
                />
                {/* Kishimoto */}
                <Image
                source={require('../../assets/Img/Characters/KishimotoSeria.png')}
                style={{...Style.Expresiones,opacity:KishimotoSeria}}
                />
                <Image
                source={require('../../assets/Img/Characters/KishimotoNerviosa.png')}
                style={{...Style.Expresiones,opacity:KishimotoNerviosa}}
                />
                <Image
                source={require('../../assets/Img/Characters/KishimotoTriste.png')}
                style={{...Style.Expresiones,opacity:KishimotoTriste}}
                />
                <Image
                source={require('../../assets/Img/Characters/KishimotoParpadeo1.png')}
                style={{...Style.Expresiones,opacity:KishimotoParpadeo1}}
                />
                <Image
                source={require('../../assets/Img/Characters/KishimotoParpadeo2.png')}
                style={{...Style.Expresiones,opacity:KishimotoParpadeo2}}
                />
                <Image
                source={require('../../assets/Img/Characters/KishimotoParpadeo3.png')}
                style={{...Style.Expresiones,opacity:KishimotoParpadeo3}}
                />
                {/* Nishi */}
                <Image
                source={require('../../assets/Img/Characters/NishiSerio.png')}
                style={{...Style.Expresiones,opacity:NishiSerio}}
                />
                {/* Botones */}
                <TouchableOpacity onPress={Boton1}>
                    <Image source={require('../../assets/Img/Buttons/boton1.png')}
                    style={Style.boton1}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={Boton2}>
                    <Image source={require('../../assets/Img/Buttons/boton2.png')}
                    style={Style.boton2}/>
                </TouchableOpacity>
                <Text style={Style.Texto}>Proyecto Aplicacion Móvil Modelo 1.1</Text>
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
console.log(windowHeight,windowWidth,leftPosition)
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