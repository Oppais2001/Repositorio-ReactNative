import React, {useEffect, useState} from "react";
import { Image, Text, View, StyleSheet,TouchableWithoutFeedback, Alert, Dimensions, StatusBar} from "react-native";
import { Asset } from 'expo-asset';
import Carga from "./Carga";
import { Dialogos, NuevosDialogos0, NuevosDialogos1, NuevosDialogos2} from "../components/ListaDialogos.js";


import { Kurono, Kato, Kishimoto, Nishi, Hojo, Sadako, Cebollin, MrCebollin, decision1, decision2} from "../components/ClasesDialogos";
const Main = ()=>{
    const ArrayDialogos = Dialogos;
    const [ready, setReady] = useState(false);
    //const [InicioTransicion, setInicioTranscion] = useState(0);
    const [StartOpacidad, setStartOpacidad] = useState(1);
    const [DialogosOpacidad, setDialogosOpacidad] = useState(0);
    /* Indice de Dialogo */
    const [Indice, CambiarIndice] = useState(0);
    /* Cargado de Imagenes */
    /* Fondo */
    const [Fondo, setFondo] = useState(null);
    /* Ropas */
        /* Kurono */
    const [KuronoUniforme, setKuronoUniforme] = useState(null);
    const [KuronoUniformeEnojado, setKuronoUniformeEnojado] = useState(null);
    const [KuronoCamisa, setKuronoCamisa] = useState(null);
    const [KuronoCamisaEnojado, setKuronoCamisaEnojado] = useState(null);
    const [KuronoTraje, setKuronoTraje] = useState(null);
    const [KuronoTrajeEnojado, setKuronoTrajeEnojado] = useState(null);
    const [KuronoPoleron, setKuronoPoleron] = useState(null);
        /* Kato */
    const [KatoUniforme, setKatoUniforme] = useState(null);
    const [KatoTraje, setKatoTraje] = useState(null);
    const [KatoTrajeEnojado, setKatoTrajeEnojado] = useState(null);
        /* Kishimoto */
    const [KishimotoDesnuda, setKishimotoDesnuda] = useState(null);
    const [KishimotoUniforme, setKishimotoUniforme] = useState(null);
    const [KishimotoTraje, setKishimotoTraje] = useState(null);
    const [KishimotoColegial, setKishimotoColegial] = useState(null);
        /* Nishi */
    const [NishiTraje, setNishiTraje] = useState(null);
    /* Expresiones */
        /* Kurono */
    const [KuronoSerio, setKuronoSerio] = useState(null);
    const [KuronoNervioso, setKuronoNervioso] = useState(null);
    const [KuronoFeliz, setKuronoFeliz] = useState(null);
    const [KuronoTriste, setKuronoTriste] = useState(null);
    const [KuronoSorprendido, setKuronoSorprendido] = useState(null);
        /* Kato */
    const [KatoSerio, setKatoSerio] = useState(null);
    const [KatoNervioso, setKatoNervioso] = useState(null);
    const [KatoFeliz, setKatoFeliz] = useState(null);
    const [KatoTriste, setKatoTriste] = useState(null);
    const [KatoSorprendido, setKatoSorprendido] = useState(null);
        /* Kishimoto */
    const [KishimotoSeria, setKishimotoSeria] = useState(null);
    const [KishimotoNerviosa, setKishimotoNerviosa] = useState(null);
    const [KishimotoFeliz, setkishimotoFeliz] = useState(null);
    const [KishimotoTriste, setKishimotoTriste] = useState(null);
    const [KishimotoParpadeo1, setKishimotoParpadeo1] = useState(null);
    const [KishimotoParpadeo2, setKishimotoParpadeo2] = useState(null);
    const [KishimotoParpadeo3, setKishimotoParpadeo3] = useState(null);
        /* Nishi */
    const [NishiSerio, setNishiSerio] = useState(null);
        /* Perro */
    const [PerroImage, setPerroImage] = useState(null);
    /* Opacidades de Imagenes */
    /* Fondo */
    const [FondoOpacidad, setFondoOpacidad] = useState(0);
    /* Kurono */
    const [KuronoUniformeOpacidad, setKuronoUniformeOpacidad] = useState(0);
    const [KuronoUniformeEnojadoOpacidad, setKuronoUniformeEnojadoOpacidad] = useState(0);
    const [KuronoCamisaOpacidad, setKuronoCamisaOpacidad] = useState(0);
    const [KuronoCamisaEnojadoOpacidad, setKuronoCamisaEnojadoOpacidad] = useState(0);
    const [KuronoTrajeOpacidad, setKuronoTrajeOpacidad] = useState(0);
    const [KuronoTrajeEnojadoOpacidad, setKuronoTrajeEnojadoOpacidad] = useState(0);
    const [KuronoPoleronOpacidad, setKuronoPoleronOpacidad] = useState(0);
        /* Kato */
    const [KatoUniformeOpacidad, setKatoUniformeOpacidad] = useState(0);
    const [KatoTrajeOpacidad, setKatoTrajeOpacidad] = useState(0);
    const [KatoTrajeEnojadoOpacidad, setKatoTrajeEnojadoOpacidad] = useState(0);
        /* Kishimoto */
    const [KishimotoDesnudaOpacidad, setKishimotoDesnudaOpacidad] = useState(0);
    const [KishimotoUniformeOpacidad, setKishimotoUniformeOpacidad] = useState(0);
    const [KishimotoTrajeOpacidad, setKishimotoTrajeOpacidad] = useState(0);
    const [KishimotoColegialOpacidad, setKishimotoColegialOpacidad] = useState(0);
        /* Nishi */
    const [NishiTrajeOpacidad, setNishiTrajeOpacidad] = useState(0);
    /* Expresiones */
        /* Kurono */
    const [KuronoSerioOpacidad, setKuronoSerioOpacidad] = useState(0);
    const [KuronoNerviosoOpacidad, setKuronoNerviosoOpacidad] = useState(0);
    const [KuronoFelizOpacidad, setKuronoFelizOpacidad] = useState(0);
    const [KuronoTristeOpacidad, setKuronoTristeOpacidad] = useState(0);
    const [KuronoSorprendidoOpacidad, setKuronoSorprendidoOpacidad] = useState(0);
        /* Kato */
    const [KatoSerioOpacidad, setKatoSerioOpacidad] = useState(0);
    const [KatoNerviosoOpacidad, setKatoNerviosoOpacidad] = useState(0);
    const [KatoFelizOpacidad, setKatoFelizOpacidad] = useState(0);
    const [KatoTristeOpacidad, setKatoTristeOpacidad] = useState(0);
    const [KatoSorprendidoOpacidad, setKatoSorprendidoOpacidad] = useState(0);
        /* Kishimoto */
    const [KishimotoSeriaOpacidad, setKishimotoSeriaOpacidad] = useState(0);
    const [KishimotoNerviosaOpacidad, setKishimotoNerviosaOpacidad] = useState(0);
    const [KishimotoFelizOpacidad, setkishimotoFelizOpacidad] = useState(0);
    const [KishimotoTristeOpacidad, setKishimotoTristeOpacidad] = useState(0);
    const [KishimotoParpadeo1Opacidad, setKishimotoParpadeo1Opacidad] = useState(0);
    const [KishimotoParpadeo2Opacidad, setKishimotoParpadeo2Opacidad] = useState(0);
    const [KishimotoParpadeo3Opacidad, setKishimotoParpadeo3Opacidad] = useState(0);
        /* Nishi */
    const [NishiSerioOpacidad, setNishiSerioOpacidad] = useState(0);
        /* Perro */
    const [Perro, setPerroOpacidad] = useState(0);
    /* Decisiones */
    const [Decision1, MostrarDecision1] = useState(0);
    const [Decision2, MostrarDecision2] = useState(0);
    const [BotonInicioDisable, setBotonInicioDisable] = useState(false);
    const [BotonDialogosDisable, setBotonDialogosDisable] = useState(true);
    const Inicio = () =>{
        setStartOpacidad(0);
        setBotonInicioDisable(true);
        setDialogosOpacidad(1);
        setFondoOpacidad(1);
        setKuronoUniformeOpacidad(1);
        setKuronoSerioOpacidad(1);
        setBotonDialogosDisable(false);
    }
    const BorrarRopa = () =>{
        console.log("Borrado Ropa")
        /*Kurono*/
        setKuronoUniformeOpacidad(0);
        setKuronoUniformeEnojadoOpacidad(0);
        setKuronoCamisaOpacidad(0);
        setKuronoCamisaEnojadoOpacidad(0);
        setKuronoTrajeOpacidad(0);
        setKuronoTrajeEnojadoOpacidad(0);
        setKuronoPoleronOpacidad(0);
        /*Kato*/
        setKatoUniformeOpacidad(0);
        setKatoTrajeOpacidad(0);
        setKatoTrajeEnojadoOpacidad(0);
        /*Kishimoto*/
        setKishimotoDesnudaOpacidad(0);
        setKishimotoUniformeOpacidad(0);
        setKishimotoTrajeOpacidad(0);
        setKishimotoColegialOpacidad(0);
        /*Nishi*/
        setNishiTrajeOpacidad(0);
        /*Perro*/
        setPerroOpacidad(0);
    }
    const BorrarExpresion = () =>{
        console.log("Borrado Expresion")
        /*Kurono*/
        setKuronoSerioOpacidad(0);
        setKuronoFelizOpacidad(0);
        setKuronoNerviosoOpacidad(0);
        setKuronoSorprendidoOpacidad(0);
        setKuronoTristeOpacidad(0);
        /*Kato*/
        setKatoSerioOpacidad(0);
        setKatoFelizOpacidad(0);
        setKatoNerviosoOpacidad(0);
        setKatoSorprendidoOpacidad(0);
        setKatoTristeOpacidad(0);
        /*Kishimoto*/
        setKishimotoSeriaOpacidad(0);
        setkishimotoFelizOpacidad(0);
        setKishimotoNerviosaOpacidad(0);
        setKishimotoTristeOpacidad(0);
        setKishimotoParpadeo1Opacidad(0);
        setKishimotoParpadeo2Opacidad(0);
        setKishimotoParpadeo3Opacidad(0);
        /*Nishi*/
        setNishiSerioOpacidad(0);
    }        
    const MostrarPersonajes = (IndiceActual) => {
        console.log(IndiceActual)
        if(Kurono.ComprobarIndice(IndiceActual)){
            console.log("Kurono")
            if(IndiceActual<12||(IndiceActual>13&&IndiceActual<43)||IndiceActual==47||
            IndiceActual==57||(IndiceActual>59&&IndiceActual<69)||
            (IndiceActual>71&&IndiceActual<83)){
                console.log("Serio");
                if(KuronoSerioOpacidad==0){
                    BorrarExpresion();
                    setKuronoSerioOpacidad(1);
                }
            }else if(IndiceActual==43||IndiceActual==46||IndiceActual==58||IndiceActual==69||IndiceActual==71){
                console.log("Nervioso")
                if(KuronoNerviosoOpacidad==0){
                    BorrarExpresion();
                    setKuronoNerviosoOpacidad(1);
                }            
            }else if(IndiceActual==13){
                console.log("Feliz")
                if(KuronoFelizOpacidad==0){
                    BorrarExpresion();
                    setKuronoFelizOpacidad(1);
                }                  
            }else if(IndiceActual==50||IndiceActual==51||IndiceActual==54){
                console.log("Sorprendido")
                if(KuronoSorprendidoOpacidad==0){
                    BorrarExpresion();
                    setKuronoSorprendidoOpacidad(1);
                }                   
            }else{
                console.log("Falta la expresion")
                console.log("Serio por defecto")
                if(KuronoSerioOpacidad==0){
                    BorrarExpresion();
                    setKuronoSerioOpacidad(1);
                }
            }/*Eventos Referentes a la Ropa de los personajes independiente de las decisiones */
            if(IndiceActual<58){
                console.log("Uniforme");
                if(KuronoUniformeOpacidad==0){
                    BorrarRopa();
                    setKuronoUniformeOpacidad(1);
                }
            }else if(IndiceActual==58){
                console.log("Animación Camisa");
                if(KuronoCamisaOpacidad==0){
                    BorrarRopa();
                    setKuronoCamisaOpacidad(1);
                }
            }else if(IndiceActual<80){
                console.log("Camisa");
                if(KuronoCamisaOpacidad==0){
                    BorrarRopa();
                    setKuronoCamisaOpacidad(1);
                }
            }else{
                console.log("Falta la Ropa")
                console.log("Camisa por defecto");
                if(KuronoCamisaOpacidad==0){
                    BorrarRopa();
                    setKuronoCamisaOpacidad(1);
                }
            }
        }else if(Kato.ComprobarIndice(IndiceActual)){
            console.log("Kato")
            if(IndiceActual<91){
                console.log("Uniforme")
                if(KatoUniformeOpacidad==0){
                    BorrarRopa();
                    setKatoUniformeOpacidad(1);
                }
            }else{
                console.log('Falta Definir Ropa')
                console.log("Uniforme por defecto")
                if(KatoUniformeOpacidad==0){
                    BorrarRopa();
                    setKatoUniformeOpacidad(1);
                }
            }
            if(IndiceActual==12||IndiceActual==15){
                console.log("Nervioso");
                if(KatoNerviosoOpacidad==0){
                    BorrarExpresion();
                    setKatoNerviosoOpacidad(1);
                }
            }else if(IndiceActual==4||IndiceActual==5||IndiceActual==39||IndiceActual==44||IndiceActual==48||
                IndiceActual==49||IndiceActual==61){
                console.log("Serio");
                if(KatoSerioOpacidad==0){
                    BorrarExpresion();
                    setKatoSerioOpacidad(1);
                }
            }else if(IndiceActual==41||IndiceActual==45){
                console.log("Feliz");
                if(KatoFelizOpacidad==0){
                    BorrarExpresion();
                    setKatoFelizOpacidad(1);
                }            
            }else if(IndiceActual==52||IndiceActual==55){
                console.log("Sorprendido");
                if(KatoSorprendidoOpacidad==0){
                    BorrarExpresion();
                    setKatoSorprendidoOpacidad(1);
                }            
            }else{
                console.log("Falta definir Expresion")
                console.log("Serio por defecto");
                if(KatoSerioOpacidad==0){
                    BorrarExpresion();
                    setKatoSerioOpacidad(1);
                }
            }
        }else if(Kishimoto.ComprobarIndice(IndiceActual)){
            console.log("Kishimoto")
            if(IndiceActual<94){
                if(IndiceActual==53||IndiceActual==56){
                    if(KishimotoDesnudaOpacidad==0){
                        BorrarRopa();
                        setKishimotoDesnudaOpacidad(1);
                    }
                }else if(IndiceActual==59){
                    console.log("Uniforme")
                    if(KishimotoUniformeOpacidad==0){
                        BorrarRopa();
                        setKishimotoUniformeOpacidad(1);
                    }
                }else{
                    console.log('Falta Definir Ropa')
                    console.log("Uniforme por defecto")
                    if(KishimotoUniformeOpacidad==0){
                        BorrarRopa();
                        setKishimotoUniformeOpacidad(1);
                    }
                }
                if(IndiceActual==53){
                    console.log("Parpadeo1")
                    if(KishimotoParpadeo1Opacidad==0){
                        BorrarExpresion();
                        setKishimotoParpadeo1Opacidad(1);
                    }  
                }else if(IndiceActual==56){
                    console.log("Parpadeo2")
                    if(KishimotoParpadeo2Opacidad==0){
                        BorrarExpresion();
                        setKishimotoParpadeo2Opacidad(1);
                    }
                }else if(IndiceActual==59){
                    console.log("Seria")
                    if(KishimotoSeriaOpacidad==0){
                        BorrarExpresion();
                        setKishimotoSeriaOpacidad(1);
                    }
                }else{
                    console.log("Falta la Expresion")
                    console.log("Seria por defecto")
                    if(KishimotoSeriaOpacidad==0){
                        BorrarExpresion();
                        setKishimotoSeriaOpacidad(1);
                    }
                }
            }
        }else if(Nishi.ComprobarIndice(IndiceActual)){
            console.log("Nishi")
            if(NishiTrajeOpacidad==0){
                BorrarRopa();
                setNishiTrajeOpacidad(1);
            }
            if(NishiSerioOpacidad==0){
                BorrarExpresion();
                setNishiSerioOpacidad(1);
            }
        }else if(decision1.ComprobarIndice(IndiceActual)){
            console.log('Decisión 1')
        }
        /*}else if(Hojo.ComprobarIndice(IndiceActual)){
            var rutaPersonaje = Hojo.MostrarPersonaje();
            var rutaExpresion = Hojo.MostrarExpresion();
        }else if(Cebollin.ComprobarIndice(IndiceActual)){
            var rutaPersonaje = Cebollin.MostrarPersonaje();
            var rutaExpresion = "";
        }else{
            console.log("Falta el personaje")
        */
    }
    const Avanzar = () => {
        console.log("Avanzar", ArrayDialogos.length)
        if(Indice<ArrayDialogos.length){
            CambiarIndice(Indice+1)
            console.log("Posicion: " + String(Indice+1))
            console.log("Indice: " + String(Indice+2))
            MostrarPersonajes(Indice + 2);
        }
    }
    const Retroceder = () => {
        if(Indice>0){
            CambiarIndice(Indice-1)
            console.log("Posicion: " + String(Indice-1))
            console.log("Indice: " + String(Indice+2))
            MostrarPersonajes(Indice);
        }
    }
    useEffect(() => {
        (async () => {
            /* Fondo */
            const FondoImage = Asset.fromModule(require('../../assets/img/Backgrounds/Room.jpeg'))
            /* Kurono */
            const KuronoUniformeImage = Asset.fromModule(require('../../assets/img/Characters/KuronoUniforme.png'))
            const KuronoCamisaImage = Asset.fromModule(require('../../assets/img/Characters/KuronoCamisa.png'))
            const KuronoTrajeImage = Asset.fromModule(require('../../assets/img/Characters/KuronoTraje.png'))
            const KuronoSerioImage = Asset.fromModule(require('../../assets/img/Characters/KuronoSerio.png'))
            const KuronoNerviosoImage = Asset.fromModule(require('../../assets/img/Characters/KuronoNervioso.png'))
            const KuronoFelizImage = Asset.fromModule(require('../../assets/img/Characters/KuronoFeliz.png'))
            const KuronoTristeImage = Asset.fromModule(require('../../assets/img/Characters/KuronoTriste.png'))
            const KuronoSorprendidoImage = Asset.fromModule(require('../../assets/img/Characters/KuronoSorprendido.png'))
            /* Kato */
            const KatoUniformeImage = Asset.fromModule(require('../../assets/img/Characters/KatoUniforme.png'))
            const KatotrajeImage = Asset.fromModule(require('../../assets/img/Characters/KatoTraje.png'))
            const KatoSerioImage = Asset.fromModule(require('../../assets/img/Characters/KatoSerio.png'))
            const KatoNerviosoImage = Asset.fromModule(require('../../assets/img/Characters/KatoNervioso.png'))
            const KatoFelizImage = Asset.fromModule(require('../../assets/img/Characters/KatoFeliz.png'))
            const KatoSorprendidoImage = Asset.fromModule(require('../../assets/img/Characters/KatoSorprendido.png'))
            /* Kishimoto */
            const KishimotoDesnudaImage = Asset.fromModule(require('../../assets/img/Characters/Kishimoto.png'))
            const KishimotoUniformeImage = Asset.fromModule(require('../../assets/img/Characters/KishimotoUniforme.png'))
            const KishimotoTrajeImage = Asset.fromModule(require('../../assets/img/Characters/KishimotoTraje.png'))
            const KishimotoSeriaImage = Asset.fromModule(require('../../assets/img/Characters/KishimotoSeria.png'))
            const KishimotoNerviosaImage = Asset.fromModule(require('../../assets/img/Characters/KishimotoNerviosa.png'))
            const KishimotoFelizImage = Asset.fromModule(require('../../assets/img/Characters/KishimotoFeliz.png'))
            const KishimotoParpadeo1Image = Asset.fromModule(require('../../assets/img/Characters/KishimotoParpadeo1.png'))
            const KishimotoParpadeo2Image = Asset.fromModule(require('../../assets/img/Characters/KishimotoParpadeo2.png'))
            const KishimotoParpadeo3Image = Asset.fromModule(require('../../assets/img/Characters/KishimotoParpadeo3.png'))
            /* Nishi */
            const NishiTrajeImage = Asset.fromModule(require('../../assets/img/Characters/NishiTraje.png'))
            const NishiSerioImage = Asset.fromModule(require('../../assets/img/Characters/NishiSerio.png'))
            /* Perro */
            const PerroImage = Asset.fromModule(require('../../assets/img/Characters/Perro.png'))
            const Lista = [
                FondoImage.downloadAsync(),
                KuronoUniformeImage.downloadAsync(),
                KuronoCamisaImage.downloadAsync(),
                KuronoTrajeImage.downloadAsync(),
                KuronoSerioImage.downloadAsync(),
                KuronoNerviosoImage.downloadAsync(),
                KuronoFelizImage.downloadAsync(),
                KuronoSorprendidoImage.downloadAsync(),
                KatoUniformeImage.downloadAsync(),
                KatotrajeImage.downloadAsync(),
                KatoSerioImage.downloadAsync(),
                KatoNerviosoImage.downloadAsync(),
                KatoFelizImage.downloadAsync(),
                KatoSorprendidoImage.downloadAsync(),
                KishimotoDesnudaImage.downloadAsync(),
                KishimotoUniformeImage.downloadAsync(),
                KishimotoTrajeImage.downloadAsync(),
                KishimotoSeriaImage.downloadAsync(),
                KishimotoNerviosaImage.downloadAsync(),
                KishimotoFelizImage.downloadAsync(),
                KishimotoParpadeo1Image.downloadAsync(),
                KishimotoParpadeo2Image.downloadAsync(),
                KishimotoParpadeo3Image.downloadAsync(),
                NishiTrajeImage.downloadAsync(),
                NishiSerioImage.downloadAsync(),
                PerroImage.downloadAsync()
            ];
            try {
                await Promise.all(Lista);
                console.log("Ha cargado");
                setFondo(FondoImage);
                setKuronoUniforme(KuronoUniformeImage);
                setKuronoCamisa(KuronoCamisaImage);
                setKuronoTraje(KuronoTrajeImage);
                setKatoUniforme(KatoUniformeImage);
                setKuronoSerio(KuronoSerioImage);
                setKuronoNervioso(KuronoNerviosoImage);
                setKuronoFeliz(KuronoFelizImage);
                setKuronoSorprendido(KuronoSorprendidoImage);
                setKatoSerio(KatoSerioImage);
                setKatoNervioso(KatoNerviosoImage);
                setKatoFeliz(KatoFelizImage);
                setKatoSorprendido(KatoSorprendidoImage);
                setKishimotoDesnuda(KishimotoDesnudaImage);
                setKishimotoUniforme(KishimotoUniformeImage);
                setKishimotoTraje(KishimotoTrajeImage);
                setKishimotoSeria(KishimotoSeriaImage);
                setKishimotoNerviosa(KishimotoNerviosaImage);
                setkishimotoFeliz(KishimotoFelizImage);
                setKishimotoParpadeo1(KishimotoParpadeo1Image);
                setKishimotoParpadeo2(KishimotoParpadeo2Image);
                setKishimotoParpadeo3(KishimotoParpadeo3Image);
                setNishiTraje(NishiTrajeImage);
                setNishiSerio(NishiSerioImage);
                setPerroImage(PerroImage);
                setReady(true)
            } catch (error) {
                console.error('Error al descargar las imágenes', error);
            }
        })();
    }, []);
      if(!ready){
        return (
            <Carga/>
        )
      }
    return (
        <>
            <StatusBar hidden={true} />
            <View style={styles.container}>
                <Image
                source={{...Fondo}}
                style={{...styles.Fondo, opacity: FondoOpacidad}}
                />
                {/* Ropa */}
                {/* Kurono */}
                <Image
                source={{...KuronoUniforme}}
                style={{...styles.Personajes,opacity:KuronoUniformeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoUniformeEnojado}}
                style={{...styles.Personajes,opacity:KuronoUniformeEnojadoOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoCamisa}}
                style={{...styles.Personajes,opacity:KuronoCamisaOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoCamisaEnojado}}
                style={{...styles.Personajes,opacity:KuronoCamisaEnojadoOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoTraje}}
                style={{...styles.Personajes,opacity:KuronoTrajeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoTrajeEnojado}}
                style={{...styles.Personajes,opacity:KuronoTrajeEnojadoOpacidad}}
                cachePolicy={'memory'}
                />
                {/* Kato */}
                <Image
                source={{...KatoUniforme}}
                style={{...styles.Personajes,opacity:KatoUniformeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KatoTraje}}
                style={{...styles.Personajes,opacity:KatoTrajeOpacidad}}
                cachePolicy={'memory'}
                />
                {/*Kishimoto*/}
                <Image
                source={{...KishimotoDesnuda}}
                style={{...styles.Personajes,opacity:KishimotoDesnudaOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoUniforme}}
                style={{...styles.Personajes,opacity:KishimotoUniformeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoTraje}}
                style={{...styles.Personajes,opacity:KishimotoTrajeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoColegial}}
                style={{...styles.Personajes,opacity:KishimotoColegialOpacidad}}
                cachePolicy={'memory'}
                />
                {/* Nishi */}
                <Image
                source={{...NishiTraje}}
                style={{...styles.Personajes,opacity:NishiTrajeOpacidad}}
                cachePolicy={'memory'}
                />
                {/* Expresiones */}
                {/*Kurono*/}
                <Image
                source={{...KuronoSerio}}
                style={{...styles.Personajes,opacity:KuronoSerioOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoNervioso}}
                style={{...styles.Personajes,opacity:KuronoNerviosoOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoFeliz}}
                style={{...styles.Personajes,opacity:KuronoFelizOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoTriste}}
                style={{...styles.Personajes,opacity:KuronoTristeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoSorprendido}}
                style={{...styles.Personajes,opacity:KuronoSorprendidoOpacidad}}
                cachePolicy={'memory'}
                />
                {/*Kato*/}
                <Image
                source={{...KatoSerio}}
                style={{...styles.Personajes,opacity:KatoSerioOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KatoNervioso}}
                style={{...styles.Personajes,opacity:KatoNerviosoOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KatoFeliz}}
                style={{...styles.Personajes,opacity:KatoFelizOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KatoTriste}}
                style={{...styles.Personajes,opacity:KatoTristeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KatoSorprendido}}
                style={{...styles.Personajes,opacity:KatoSorprendidoOpacidad}}
                cachePolicy={'memory'}
                />
                {/* Kishimoto */}
                <Image
                source={{...KishimotoSeria}}
                style={{...styles.Personajes,opacity:KishimotoSeriaOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoNerviosa}}
                style={{...styles.Personajes,opacity:KishimotoNerviosaOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoTriste}}
                style={{...styles.Personajes,opacity:KishimotoTristeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoParpadeo1}}
                style={{...styles.Personajes,opacity:KishimotoParpadeo1Opacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoParpadeo2}}
                style={{...styles.Personajes,opacity:KishimotoParpadeo2Opacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoParpadeo3}}
                style={{...styles.Personajes,opacity:KishimotoParpadeo3Opacidad}}
                cachePolicy={'memory'}
                />
                {/* Nishi */}
                <Image
                source={{...NishiSerio}}
                style={{...styles.Personajes,opacity:NishiSerioOpacidad}}
                cachePolicy={'memory'}
                />
                {/* Botones */}
                <TouchableWithoutFeedback
                    onPress={Avanzar}
                    disabled={BotonDialogosDisable}>
                    <View
                    style={{...styles.botonesDialogos,...styles.boton1,opacity:DialogosOpacidad}}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={Retroceder}
                    disabled={BotonDialogosDisable}>
                    <View
                    style={{...styles.botonesDialogos,...styles.boton2,opacity:DialogosOpacidad}}
                    />
                </TouchableWithoutFeedback>
                {/*
                <TouchableOpacity onPress={decision1.ElegirDecision(true)} >
                    <Text>{decision1.MostrarOpcion1()}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={decision1.ElegirDecision(false)} >
                    <Text>{decision1.MostrarOpcion2()}</Text>
                </TouchableOpacity>
                */}
                <Text style={styles.Texto}>Proyecto Aplicacion Móvil Modelo 1.2</Text>
            </View>
            <View style={{...styles.Recuadro, opacity: DialogosOpacidad * 0.5}}>
            </View>
            <View style={{...styles.RecuadroDialogo, opacity: DialogosOpacidad}}>
                <Text style={styles.Dialogos}>{ArrayDialogos[Indice]}</Text>
            </View>
            <TouchableWithoutFeedback
                onPress={Inicio}
                disabled={BotonInicioDisable}
                >
                    <View style={{...styles.botonInicio, opacity: StartOpacidad}}>
                    <Text style={styles.TextoInicio}>Start</Text>
                    </View>
            </TouchableWithoutFeedback>
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
const vh = windowHeight * 0.01;
const vw = windowWidth * 0.01;
console.log(windowHeight,windowWidth,leftPosition)
const styles = StyleSheet.create({
    container: {
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
        fontSize: 5*vh}
});
export default Main