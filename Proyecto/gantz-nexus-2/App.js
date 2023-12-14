import React, { useState, useEffect } from 'react';
import { Text , StyleSheet, View, TouchableOpacity } from 'react-native';
import { Asset } from 'expo-asset';
import { Image } from 'expo-image';
import { Kurono, Kato} from './src/components/ClasesDialogos'

export default function App() {
  const [ready, setReady] = useState(false);
  const [ReadyButton, setReadyButton] = useState(false);
  const [KuronoUniforme, setKuronoUniforme] = useState(null);
  const [KuronoCamisa, setKuronoCamisa] = useState(null);
  const [KatoUniforme, setKatoUniforme] = useState(null);
  const [KuronoSerio, setKuronoSerio] = useState(null);
  const [KuronoFeliz, setKuronoFeliz] = useState(null);
  const [KuronoNervioso, setKuronoNervioso] = useState(null);
  const [KuronoSorprendido, setKuronoSorprendido] = useState(null);
  const [KatoSerio, setKatoSerio] = useState(null);
  const [KatoFeliz, setKatoFeliz] = useState(null);
  const [KatoNervioso, setKatoNervioso] = useState(null);
  const [KatoSorprendido, setKatoSorprendido] = useState(null);
  const [Indice, setIndice] = useState(1);
  const [Personaje, setPersonaje] = useState(null);
  const [Expresion, setExpresion] = useState(null);
  const MostrarPersonaje = () =>{
    setIndice(Indice + 1);
    console.log('Indice Actual:' + Indice);
    if(Kurono.ComprobarIndice(Indice)){
      console.log("Kurono")
/*Eventos Referentes a la Ropa de los personajes independiente de las decisiones */
      if(Indice<58){
          console.log("Uniforme");
          if(Personaje!=KuronoUniforme){
            setPersonaje(KuronoUniforme);
            }  
      }else if(Indice==58){
          console.log("Animación Camisa");
          if(Personaje!=KuronoCamisa){
            setPersonaje(KuronoCamisa);
            }  
      }else if(Indice<80){
        if(Personaje!=KuronoCamisa){
          setPersonaje(KuronoCamisa);
          }  
      }else{
        if(Personaje!=KuronoTraje){
          setPersonaje(KuronoTraje);
          }  
        }
        if(Indice<12||(Indice>13&&Indice<43)||Indice==47||Indice==57||(Indice>59&&Indice<69)||
        (Indice>71&&Indice<83)){
          if(Expresion!=KuronoSerio){
            setExpresion(KuronoSerio);
            }
        }else if(Indice==43||Indice==46||Indice==58||Indice==69||Indice==71){
            console.log("Nervioso")
            if(Expresion!=KuronoNervioso){
              setExpresion(KuronoNervioso);
              }          
        }else if(Indice==13){
            console.log("Feliz")
            if(Expresion!=KuronoFeliz){
              setExpresion(KuronoFeliz);
              }                
        }else if(Indice==50||Indice==51||Indice==54){
            console.log("Sorprendido")
            if(Expresion!=KuronoSorprendido){
              setExpresion(KuronoSorprendido);
              }                   
        }
  }else if(Kato.ComprobarIndice(Indice)){
      console.log("Kato")
      if(Indice<91){
          console.log("Uniforme")
          if(Personaje!=KatoUniforme){
            setPersonaje(KatoUniforme);
            }  
      }
      if(Indice==12||Indice==15){
          console.log("Nervioso");
          if(Expresion!=KatoNervioso){
            setExpresion(KatoNervioso);
          }  
      }else if(Indice==4||Indice==39||Indice==44||Indice==48){
          console.log("Serio");
          if(Expresion!=KatoSerio){
            setExpresion(KatoSerio);
            }  
      }else if(Indice==41||Indice==45){
          console.log("Feliz");
          if(Expresion!=KatoFeliz){
            setExpresion(KatoFeliz);
            }            
      }else if(Indice==52||Indice==55){
          console.log("Sorprendido");
          if(Expresion!=KatoSorprendido){
            setExpresion(KatoSorprendido);
            }             
      }else{
          console.log("Serio");
            if(Expresion!=KatoSerio){
              setExpresion(KatoSerio);
            }  
      }
    }
  /*}else if(Kishimoto.ComprobarIndice(Indice)){
      console.log("Kishimoto")
      if(Indice<94){
          if(Indice==53||Indice==56){
              if(KishimotoD==0){
                  BorrarRopa();
                  setKishimotoD(1);
              }
          }else if(Indice==59){
              console.log("Uniforme")
              if(KishimotoUniforme==0){
                  BorrarRopa();
                  setKishimotoUniforme(1);
              }
          }
          if(Indice==53){
              if(KishimotoParpadeo1==0){
                  BorrarExpresion();
                  setKishimotoParpadeo1(1);
              }  
          }else if(Indice==56){
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
  }else if(Nishi.ComprobarIndice(Indice)){
      console.log("Nishi")
      if(NishiTraje==0){
          BorrarRopa();
          setNishiTraje(1);
      }
      if(NishiSerio==0){
          BorrarExpresion();
          setNishiSerio(1);
      }
  }else if(Decision1.ComprobarIndice(Indice)){
      console.log('Decisión 1')
  }
  /*}else if(Hojo.ComprobarIndice(Indice)){
      var rutaPersonaje = Hojo.MostrarPersonaje();
      var rutaExpresion = Hojo.MostrarExpresion();
  }else if(Cebollin.ComprobarIndice(Indice)){
      var rutaPersonaje = Cebollin.MostrarPersonaje();
      var rutaExpresion = "";
  }else{
      Alert.alert("Falta el personaje")
  */
}
  useEffect(() => {
    (async () => {
      const KuronoUniforme = Asset.fromModule(require('./assets/img/Characters/KuronoUniforme.png'));
      const KuronoCamisa = Asset.fromModule(require('./assets/img/Characters/KuronoCamisa.png'));
      const KuronoTraje = Asset.fromModule(require('./assets/img/Characters/KuronoTraje.png'));
      const KatoUniforme = Asset.fromModule(require('./assets/img/Characters/KatoUniforme.png'));
      const KuronoSerio = Asset.fromModule(require('./assets/img/Characters/KuronoSerio.png'));
      const KuronoNervioso = Asset.fromModule(require('./assets/img/Characters/KuronoNervioso.png'));
      const KuronoFeliz = Asset.fromModule(require('./assets/img/Characters/KuronoFeliz.png'));
      const KuronoSorprendido = Asset.fromModule(require('./assets/img/Characters/KuronoSorprendido.png'));
      const KatoSerio = Asset.fromModule(require('./assets/img/Characters/KatoSerio.png'));
      const KatoNervioso = Asset.fromModule(require('./assets/img/Characters/KatoNervioso.png'));
      const KatoFeliz = Asset.fromModule(require('./assets/img/Characters/KatoFeliz.png'));
      const KatoSorprendido = Asset.fromModule(require('./assets/img/Characters/KatoSorprendido.png'));
      await KuronoUniforme.downloadAsync(),KuronoCamisa.downloadAsync(),KuronoTraje.downloadAsync(),
      KatoUniforme.downloadAsync(), KuronoSerio.downloadAsync(),KuronoNervioso.downloadAsync(),        
      KuronoFeliz.downloadAsync(),KuronoSorprendido.downloadAsync(),KatoSerio.downloadAsync(),
      KatoNervioso.downloadAsync(),KatoFeliz.downloadAsync(),KatoSorprendido.downloadAsync()
      setKuronoUniforme(KuronoUniforme);
      setKuronoCamisa(KuronoCamisa);
      setKatoUniforme(KatoUniforme);
      setKuronoSerio(KuronoSerio);
      setKuronoNervioso(KuronoNervioso);
      setKuronoFeliz(KuronoFeliz);
      setKuronoSorprendido(KuronoSorprendido);
      setKatoSerio(KatoSerio);
      setKatoNervioso(KatoNervioso);
      setKatoFeliz(KatoFeliz);
      setKatoSorprendido(KatoSorprendido);
      setPersonaje(KuronoUniforme);
      setExpresion(KuronoSerio);
      setReady(true);
    })();
  }, []);
  if(!ready){
    return(
      <View>
        <Text style={styles.texto}>Cargando...</Text>
      </View>
    );
  }
  return(
    <View style={styles.container}>
      <Image source={{...Personaje}} style={styles.image} cachePolicy={'memory'} transition={null}/>
      <Image source={{...Expresion}} style={styles.image} cachePolicy={'memory'} transition={null}/>
      <TouchableOpacity style={styles.boton} onPress={MostrarPersonaje} disabled={ReadyButton}>
        <Text style={styles.boton}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{width:'100%',height:'100%'},
  image: {position:"absolute",top:'25%',left:"5%",width:'90%',height:'75%'},
  texto: {fontSize:50,color:'red', marginTop:'10%', textAlign:"center"},
  boton: {color:'red', position:"absolute", top:'90%', left: '33%'}
});