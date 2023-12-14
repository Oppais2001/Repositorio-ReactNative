
import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const vh = windowHeight * 0.01;
const vw = windowWidth * 0.01;
console.log(windowHeight,windowWidth)

const EstilosInicio = StyleSheet.create({
    PreCarga: {
        height: 100*vh,
        width: 107*vw,
        backgroundColor: 'red'
    },
    ContainerInicio: {
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
})
const EstilosCarga = StyleSheet.create({
    PantallaCarga: {
        backgroundColor: "black",
        height: windowHeight,
        width: windowWidth + 7*vw,
        position:'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center'
    },
    TextoCarga: {
        fontFamily: 'Genjiro',
        fontSize:12*vh,
        color: 'red',
        color:'red',
        textAlign:'center',
    }
})
const EstilosDialogos = StyleSheet.create({
    ContainerDialogos: {
        backgroundColor: "black",
        height:'100%'
    },
    Texto: {
        color:'white',
        textAlign: "center",
        marginTop:vh
    },
    TextoInicio:{
        fontFamily:'Genjiro',
        fontSize:10*vh,
        color:'red',
        textAlign:'center'
    },
    Personajes: {
        height: 100*vh,
        width:40*vw,
        position:"absolute",
        top:0*vh,
        alignSelf:'center'
    },
    botonInicio: {
        height: '10%',
        width: '20%',
        backgroundColor: 'black',
        position:'absolute',
        top:'45%',
        left:'40%',
        justifyContent: 'center'
    },
    botonesDialogos: {
        height:100*vh,
        width:50*vw,
        position:"absolute",
        top: 0,
        backgroundColor:'transparent'
    },
    boton1: {
        left:50*vw
    },
    boton2: {
        left:0
    },
    Fondo: {
        height:windowHeight,
        width:windowWidth + 18*vh,
        position:"absolute",
        top: 0,
        left:-10},
    Recuadro: {
        height: 33*vh,
        width: 108*vw,
        position:"absolute",
        top:68*vh,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: "white",
        backgroundColor:"black"
    },
    RecuadroDialogo: {
        height: 25*vh,
        width:100*vw,
        position:"absolute",
        top:68*vh,
        alignSelf:'center',
        backgroundColor:"transparent"},
    Dialogos: {
        color: 'white',
        position: 'relative',
        top: 1*vh,
        textAlign: 'center',
        fontSize: 5*vh},
    IconDialogos: {
        position:'absolute',
        top: 22.5*vh,
        left: 95*vw,
    },
    Nombre: {
        color: 'white',
        position: 'relative',
        top: 20 *vh,
        fontSize: 5*vh,
        textAlign: 'center'
    },
    Decisiones: {
        width: 30*vw,
        height: 10*vh,
        color: 'white',
        borderRadius: 10*vh,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'black',
        fontSize: 4*vh
    },
    Decision1A: {
        position: 'absolute',
        top: 10*vh,
        left: 5*vw,
    },
    Decision1B: {
        position: 'absolute',
        top: 10*vh,
        left: 65*vw,

    },
    FlechaDecision1A: {
        position: 'absolute',
        top: 11.4*vh,
        left: 6.5*vw,
        textAlign: 'center'
    },
    FlechaDecision1B: {
        position: 'absolute',
        top: 11.4*vh,
        left: 66.4*vw,
        textAlign: 'center',
        textAlignVertical: 'center',
        opacity: 0
    }
});

export {EstilosInicio, EstilosCarga, EstilosDialogos};