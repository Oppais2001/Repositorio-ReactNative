import React, {useEffect, useState} from 'react';
import { Text, View,TouchableWithoutFeedback, StatusBar} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Asset } from 'expo-asset';
import { Image } from 'expo-image';
import { EstilosDialogos } from './Estilos.jsx';
import Carga from './Carga.jsx';
import { Dialogos, NuevosDialogos0, NuevosDialogos1, NuevosDialogos2} from '../components/ListaDialogos.js';
import { Kurono, Kato, Kishimoto, Nishi, Hojo, Sadako, Cebollin, MrCebollin, decision1, decision2} from '../components/ClasesDialogos';

const Main = ()=>{
    /* identifica cuando la app esta lista para iniciar */
    const [ready, setReady] = useState(false);
    /* Indice de Dialogo */
    const [Indice, CambiarIndice] = useState(78);
    /* Nombre del Personaje*/
    const [Nombre, CambiarNombre] = useState(null);
    /* Opacidad del panel de inicio */
    const [StartOpacidad, setStartOpacidad] = useState(1);
    /* Opacidad del panel de dialogos */
    const [DialogosOpacidad, setDialogosOpacidad] = useState(0);
    /* Opacidad del panel de decisiones */
    const [Decision1AOpacidad, setDecision1AOpacidad] = useState(0);
    const [Decision1BOpacidad, setDecision1BOpacidad] = useState(0);
    /* Decision Elegida */
    const [DecisionElegida, setDecisionElegida] = useState(null);
    /* Opacidad Iconos */
    const [IconoDialogoOpacidad, setIconoDialogoOpacidad] = useState(0);
    const [IconoOpcionAOpacidad, setIconoOpacionAOpacidad] = useState(0);
    const [IconoOpcionBOpacidad, setIconoOpacionBOpacidad] = useState(0);
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
    /* Funcion que se activa al inicial y presionar Start */
    const Inicio = () =>{
        setStartOpacidad(0);
        setBotonInicioDisable(true);
        setDialogosOpacidad(1);
        setFondoOpacidad(1);
        MostrarPersonajes(1);
        setBotonDialogosDisable(false);
        setIconoDialogoOpacidad(1);
    }/* Limpia el lienzo de cualquier personaje y su vestimenta */
    const BorrarRopa = () =>{
        console.log('Borrado Ropa')
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
    }/* Limpia del lienzo cualquier expresion */
    const BorrarExpresion = () =>{
        console.log('Borrado Expresion')
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
    }/* Funcion encargada de tomar el indice y cambiar el personaje o mantenerlo en pantalla */
    const MostrarPersonajes = (IndiceActual) => {
        if(Kurono.ComprobarIndice(IndiceActual)){
            console.log('Kurono');
            CambiarNombre('Kurono');
            if(IndiceActual<12||(IndiceActual>13&&IndiceActual<43)||IndiceActual==47||
            IndiceActual==57||(IndiceActual>59&&IndiceActual<69)||
            (IndiceActual>71&&IndiceActual<83)){
                console.log('Serio');
                if(KuronoSerioOpacidad==0){
                    BorrarExpresion();
                    setKuronoSerioOpacidad(1);
                }
            }else if(IndiceActual==43||IndiceActual==46||IndiceActual==58||IndiceActual==69||IndiceActual==71){
                console.log('Nervioso')
                if(KuronoNerviosoOpacidad==0){
                    BorrarExpresion();
                    setKuronoNerviosoOpacidad(1);
                }            
            }else if(IndiceActual==13){
                console.log('Feliz')
                if(KuronoFelizOpacidad==0){
                    BorrarExpresion();
                    setKuronoFelizOpacidad(1);
                }                  
            }else if(IndiceActual==50||IndiceActual==51||IndiceActual==54){
                console.log('Sorprendido')
                if(KuronoSorprendidoOpacidad==0){
                    BorrarExpresion();
                    setKuronoSorprendidoOpacidad(1);
                }                   
            }else{
                console.log('Falta la expresion')
                console.log('Serio por defecto')
                if(KuronoSerioOpacidad==0){
                    BorrarExpresion();
                    setKuronoSerioOpacidad(1);
                }
            }/*Eventos Referentes a la Ropa de los personajes independiente de las decisiones */
            if(IndiceActual<58){
                console.log('Uniforme');
                if(KuronoUniformeOpacidad==0){
                    BorrarRopa();
                    setKuronoUniformeOpacidad(1);
                }
            }else if(IndiceActual==58){
                console.log('Animación Camisa');
                if(KuronoCamisaOpacidad==0){
                    BorrarRopa();
                    setKuronoCamisaOpacidad(1);
                }
            }else if(IndiceActual<80){
                console.log('Camisa');
                if(KuronoCamisaOpacidad==0){
                    BorrarRopa();
                    setKuronoCamisaOpacidad(1);
                }
            }else{
                console.log('Falta la Ropa')
                console.log('Camisa por defecto');
                if(KuronoCamisaOpacidad==0){
                    BorrarRopa();
                    setKuronoCamisaOpacidad(1);
                }
            }
        }else if(Kato.ComprobarIndice(IndiceActual)){
            console.log('Kato');
            CambiarNombre('Kato');
            if(decision1.ComprobarIndice(IndiceActual)){
                console.log('Decisión 1');
                setDecision1AOpacidad(1);
                setDecision1BOpacidad(1);
            }
            if(IndiceActual<91){
                console.log('Uniforme')
                if(KatoUniformeOpacidad==0){
                    BorrarRopa();
                    setKatoUniformeOpacidad(1);
                }
            }else{
                console.log('Falta Definir Ropa')
                console.log('Uniforme por defecto')
                if(KatoUniformeOpacidad==0){
                    BorrarRopa();
                    setKatoUniformeOpacidad(1);
                }
            }
            if(IndiceActual==12||IndiceActual==15){
                console.log('Nervioso');
                if(KatoNerviosoOpacidad==0){
                    BorrarExpresion();
                    setKatoNerviosoOpacidad(1);
                }
            }else if(IndiceActual==4||IndiceActual==5||IndiceActual==39||IndiceActual==44||IndiceActual==48||
                IndiceActual==49||IndiceActual==61){
                console.log('Serio');
                if(KatoSerioOpacidad==0){
                    BorrarExpresion();
                    setKatoSerioOpacidad(1);
                }
            }else if(IndiceActual==41||IndiceActual==45){
                console.log('Feliz');
                if(KatoFelizOpacidad==0){
                    BorrarExpresion();
                    setKatoFelizOpacidad(1);
                }            
            }else if(IndiceActual==52||IndiceActual==55){
                console.log('Sorprendido');
                if(KatoSorprendidoOpacidad==0){
                    BorrarExpresion();
                    setKatoSorprendidoOpacidad(1);
                }
            }else if(IndiceActual==62||IndiceActual==63){
                console.log('Dialogo paralelo a la esfera')
                BorrarRopa();
                BorrarExpresion();
            }else{
                console.log('Falta definir Expresion')
                console.log('Serio por defecto');
                if(KatoSerioOpacidad==0){
                    BorrarExpresion();
                    setKatoSerioOpacidad(1);
                }
            }
        }else if(Kishimoto.ComprobarIndice(IndiceActual)){
            console.log('Kishimoto')
            CambiarNombre('Kishimoto')
            if(IndiceActual<94){
                if(IndiceActual==53||IndiceActual==56){
                    if(KishimotoDesnudaOpacidad==0){
                        BorrarRopa();
                        setKishimotoDesnudaOpacidad(1);
                    }
                }else if(IndiceActual==59){
                    console.log('Uniforme')
                    if(KishimotoUniformeOpacidad==0){
                        BorrarRopa();
                        setKishimotoUniformeOpacidad(1);
                    }
                }else{
                    console.log('Falta Definir Ropa')
                    console.log('Uniforme por defecto')
                    if(KishimotoUniformeOpacidad==0){
                        BorrarRopa();
                        setKishimotoUniformeOpacidad(1);
                    }
                }
                if(IndiceActual==53){
                    console.log('Parpadeo1')
                    if(KishimotoParpadeo1Opacidad==0){
                        BorrarExpresion();
                        setKishimotoParpadeo1Opacidad(1);
                    }  
                }else if(IndiceActual==56){
                    console.log('Parpadeo2')
                    if(KishimotoParpadeo2Opacidad==0){
                        BorrarExpresion();
                        setKishimotoParpadeo2Opacidad(1);
                    }
                }else if(IndiceActual==59){
                    console.log('Seria')
                    if(KishimotoSeriaOpacidad==0){
                        BorrarExpresion();
                        setKishimotoSeriaOpacidad(1);
                    }
                }else{
                    console.log('Falta la Expresion')
                    console.log('Seria por defecto')
                    if(KishimotoSeriaOpacidad==0){
                        BorrarExpresion();
                        setKishimotoSeriaOpacidad(1);
                    }
                }
            }
        }else if(Nishi.ComprobarIndice(IndiceActual)){
            console.log('Nishi')
            CambiarNombre('Nishi')
            if(NishiTrajeOpacidad==0){
                BorrarRopa();
                setNishiTrajeOpacidad(1);
            }
            if(NishiSerioOpacidad==0){
                BorrarExpresion();
                setNishiSerioOpacidad(1);
            }
        }
        /*}else if(Hojo.ComprobarIndice(IndiceActual)){
            var rutaPersonaje = Hojo.MostrarPersonaje();
            var rutaExpresion = Hojo.MostrarExpresion();
        }else if(Cebollin.ComprobarIndice(IndiceActual)){
            var rutaPersonaje = Cebollin.MostrarPersonaje();
            var rutaExpresion = '';
        }else{
            console.log('Falta el personaje')
        */
    }
    const Avanzar = () => {
        console.log('Avanzar', Dialogos.length)
        if(Indice<Dialogos.length&&Indice!=79){
            CambiarIndice(Indice+1)
            console.log('Indice del Dialogo: ' + String(Indice+1))
            console.log('Indice del Personaje: ' + String(Indice+2))
            MostrarPersonajes(Indice + 2);
            if(Indice==78){
                setIconoDialogoOpacidad(0);
            }
        }else if(Indice==79){
            if(IconoOpcionBOpacidad==0){
                console.log('Decision 1')
                setIconoOpacionAOpacidad(0);
                setIconoOpacionBOpacidad(1);
            }else{
                setIconoOpacionBOpacidad(0);
                setDecision1AOpacidad(0);
                setDecision1BOpacidad(0);
                decision1.ElegirDecision(false)
                CambiarIndice(Indice+1)
                console.log('Indice del Dialogo: ' + String(Indice+1))
                console.log('Indice del Personaje: ' + String(Indice+2))
                MostrarPersonajes(Indice + 2);
            }
        }
    }
    const Retroceder = () => {
        if(Indice>0&&Indice!=79&&Indice!=80){
            CambiarIndice(Indice-1)
            console.log('Indice del Dialogo: ' + String(Indice-1))
            console.log('Indice del Personaje: ' + String(Indice+2))
            MostrarPersonajes(Indice);

        }else if(Indice==79){
            if(IconoOpcionAOpacidad==0){
                console.log('Decision 1')
                setIconoOpacionAOpacidad(1);
                setIconoOpacionBOpacidad(0);
            }else{
                setIconoOpacionAOpacidad(0);
                setDecision1AOpacidad(0);
                setDecision1BOpacidad(0);
                decision1.ElegirDecision(true);
                CambiarIndice(Indice+1)
                console.log('Indice del Dialogo: ' + String(Indice+1))
                console.log('Indice del Personaje: ' + String(Indice+2))
                MostrarPersonajes(Indice + 2);
            }
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
            /* Lista de Imagenes de descarga asyncronica */
            const ListaImages = [FondoImage.downloadAsync(),KuronoUniformeImage.downloadAsync(),
                KuronoCamisaImage.downloadAsync(),KuronoTrajeImage.downloadAsync(),
                KuronoSerioImage.downloadAsync(),KuronoNerviosoImage.downloadAsync(),
                KuronoFelizImage.downloadAsync(),KuronoSorprendidoImage.downloadAsync(),
                KatoUniformeImage.downloadAsync(),KatotrajeImage.downloadAsync(),
                KatoSerioImage.downloadAsync(),KatoNerviosoImage.downloadAsync(),
                KatoFelizImage.downloadAsync(),KatoSorprendidoImage.downloadAsync(),
                KishimotoDesnudaImage.downloadAsync(),KishimotoUniformeImage.downloadAsync(),
                KishimotoTrajeImage.downloadAsync(),KishimotoSeriaImage.downloadAsync(),
                KishimotoNerviosaImage.downloadAsync(),KishimotoFelizImage.downloadAsync(),
                KishimotoParpadeo1Image.downloadAsync(),KishimotoParpadeo2Image.downloadAsync(),
                KishimotoParpadeo3Image.downloadAsync(),NishiTrajeImage.downloadAsync(),
                NishiSerioImage.downloadAsync(),PerroImage.downloadAsync()];
            try {
                await Promise.all(ListaImages);
                console.log('Ha cargado');
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
                setReady(true);
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
            <StatusBar hidden={true} barStyle={'translucent'}/>
            <View style={EstilosDialogos.ContainerDialogos}>
                <Image
                source={{...Fondo}}
                style={{...EstilosDialogos.Fondo, opacity: FondoOpacidad}}
                />
                {/* Ropa */}
                {/* Kurono */}
                <Image
                source={{...KuronoUniforme}}
                style={{...EstilosDialogos.Personajes,opacity:KuronoUniformeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoUniformeEnojado}}
                style={{...EstilosDialogos.Personajes,opacity:KuronoUniformeEnojadoOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoCamisa}}
                style={{...EstilosDialogos.Personajes,opacity:KuronoCamisaOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoCamisaEnojado}}
                style={{...EstilosDialogos.Personajes,opacity:KuronoCamisaEnojadoOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoTraje}}
                style={{...EstilosDialogos.Personajes,opacity:KuronoTrajeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoTrajeEnojado}}
                style={{...EstilosDialogos.Personajes,opacity:KuronoTrajeEnojadoOpacidad}}
                cachePolicy={'memory'}
                />
                {/* Kato */}
                <Image
                source={{...KatoUniforme}}
                style={{...EstilosDialogos.Personajes,opacity:KatoUniformeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KatoTraje}}
                style={{...EstilosDialogos.Personajes,opacity:KatoTrajeOpacidad}}
                cachePolicy={'memory'}
                />
                {/*Kishimoto*/}
                <Image
                source={{...KishimotoDesnuda}}
                style={{...EstilosDialogos.Personajes,opacity:KishimotoDesnudaOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoUniforme}}
                style={{...EstilosDialogos.Personajes,opacity:KishimotoUniformeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoTraje}}
                style={{...EstilosDialogos.Personajes,opacity:KishimotoTrajeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoColegial}}
                style={{...EstilosDialogos.Personajes,opacity:KishimotoColegialOpacidad}}
                cachePolicy={'memory'}
                />
                {/* Nishi */}
                <Image
                source={{...NishiTraje}}
                style={{...EstilosDialogos.Personajes,opacity:NishiTrajeOpacidad}}
                cachePolicy={'memory'}
                />
                {/* Expresiones */}
                {/*Kurono*/}
                <Image
                source={{...KuronoSerio}}
                style={{...EstilosDialogos.Personajes,opacity:KuronoSerioOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoNervioso}}
                style={{...EstilosDialogos.Personajes,opacity:KuronoNerviosoOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoFeliz}}
                style={{...EstilosDialogos.Personajes,opacity:KuronoFelizOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoTriste}}
                style={{...EstilosDialogos.Personajes,opacity:KuronoTristeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KuronoSorprendido}}
                style={{...EstilosDialogos.Personajes,opacity:KuronoSorprendidoOpacidad}}
                cachePolicy={'memory'}
                />
                {/*Kato*/}
                <Image
                source={{...KatoSerio}}
                style={{...EstilosDialogos.Personajes,opacity:KatoSerioOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KatoNervioso}}
                style={{...EstilosDialogos.Personajes,opacity:KatoNerviosoOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KatoFeliz}}
                style={{...EstilosDialogos.Personajes,opacity:KatoFelizOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KatoTriste}}
                style={{...EstilosDialogos.Personajes,opacity:KatoTristeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KatoSorprendido}}
                style={{...EstilosDialogos.Personajes,opacity:KatoSorprendidoOpacidad}}
                cachePolicy={'memory'}
                />
                {/* Kishimoto */}
                <Image
                source={{...KishimotoSeria}}
                style={{...EstilosDialogos.Personajes,opacity:KishimotoSeriaOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoNerviosa}}
                style={{...EstilosDialogos.Personajes,opacity:KishimotoNerviosaOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoTriste}}
                style={{...EstilosDialogos.Personajes,opacity:KishimotoTristeOpacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoParpadeo1}}
                style={{...EstilosDialogos.Personajes,opacity:KishimotoParpadeo1Opacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoParpadeo2}}
                style={{...EstilosDialogos.Personajes,opacity:KishimotoParpadeo2Opacidad}}
                cachePolicy={'memory'}
                />
                <Image
                source={{...KishimotoParpadeo3}}
                style={{...EstilosDialogos.Personajes,opacity:KishimotoParpadeo3Opacidad}}
                cachePolicy={'memory'}
                />
                {/* Nishi */}
                <Image
                source={{...NishiSerio}}
                style={{...EstilosDialogos.Personajes,opacity:NishiSerioOpacidad}}
                cachePolicy={'memory'}
                />
                {/* Botones */}
                <TouchableWithoutFeedback
                    onPress={Avanzar}
                    disabled={BotonDialogosDisable}>
                    <View
                    style={{...EstilosDialogos.botonesDialogos,...EstilosDialogos.boton1,opacity:DialogosOpacidad}}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={Retroceder}
                    disabled={BotonDialogosDisable}>
                    <View
                    style={{...EstilosDialogos.botonesDialogos,...EstilosDialogos.boton2,opacity:DialogosOpacidad}}
                    />
                </TouchableWithoutFeedback>
            <Text style={EstilosDialogos.Texto}>Proyecto Aplicacion Móvil Modelo 1.2</Text>
            </View>
            <View style={{...EstilosDialogos.Recuadro, opacity: DialogosOpacidad * 0.5}}>
            </View>
            <View style={{...EstilosDialogos.RecuadroDialogo, opacity: DialogosOpacidad}}>
                <Text style={EstilosDialogos.Dialogos}>{Dialogos[Indice]}</Text>
                <AntDesign name='caretdown' size={24} color='white' style={{...EstilosDialogos.IconDialogos, opacity:IconoDialogoOpacidad}}/>
            </View>
            <View style={{...EstilosDialogos.RecuadroDialogo, opacity: DialogosOpacidad}}>
                <Text style={EstilosDialogos.Nombre}>{'<'+Nombre+'>'}</Text>
                <Text
                style={{...EstilosDialogos.Decisiones,...EstilosDialogos.Decision1A,opacity:Decision1AOpacidad}}
                >
                {decision1.MostrarOpcionA()}
                </Text>
                <Text
                style={{...EstilosDialogos.Decisiones,...EstilosDialogos.Decision1B,opacity:Decision1BOpacidad}}
                >
                {decision1.MostrarOpcionB()}
                </Text>
                <AntDesign name="caretright" size={26} color="white" style={{...EstilosDialogos.FlechaDecision1A,opacity:IconoOpcionAOpacidad}} />
                <AntDesign name="caretright" size={26} color="white" style={{...EstilosDialogos.FlechaDecision1B,opacity:IconoOpcionBOpacidad}} />
            </View>
            <TouchableWithoutFeedback
                onPress={Inicio}
                disabled={BotonInicioDisable}
                >
                    <View style={{...EstilosDialogos.botonInicio, opacity: StartOpacidad}}>
                    <Text style={EstilosDialogos.TextoInicio}>Start</Text>
                    </View>
            </TouchableWithoutFeedback>
        </>
    );
};

export default Main