import React, { useState, useEffect } from 'react';
import { Text , StyleSheet, View, TouchableOpacity } from 'react-native';
import { Asset } from 'expo-asset';
import { Image } from 'expo-image';
import { Kurono, Kato} from './src/components/ClasesDialogos'

export default function App() {
  const [ready, setReady] = useState(false);
  const [ReadyButton, setReadyButton] = useState(false);
  const [KuronoUniforme, setKuronoUniforme] = useState(null);
  const [KuronoUniformeOpacity, setKuronoUniformeOpacity] = useState(0);
  const [KuronoCamisa, setKuronoCamisa] = useState(null);
  const [KuronoCamisaOpacity, setKuronoCamisaOpacity] = useState(0);
  const [KuronoTraje, setKuronoTraje] = useState(null);
  const [KuronoTrajeOpacity, setKuronoTrajeOpacity] = useState(0);
  const [KatoUniforme, setKatoUniforme] = useState(null);
  const [KatoUniformeOpacity, setKatoUniformeOpacity] = useState(0);
  const [KuronoSerio, setKuronoSerio] = useState(null);
  const [KuronoSerioOpacity, setKuronoSerioOpacity] = useState(0);
  const [KuronoFeliz, setKuronoFeliz] = useState(null);
  const [KuronoFelizOpacity, setKuronoFelizOpacity] = useState(0);
  const [KuronoNervioso, setKuronoNervioso] = useState(null);
  const [KuronoNerviosoOpacity, setKuronoNerviosoOpacity] = useState(0);
  const [KuronoSorprendido, setKuronoSorprendido] = useState(null);
  const [KuronoSorprendidoOpacity, setKuronoSorprendidoOpacity] = useState(0);
  const [KatoSerio, setKatoSerio] = useState(null);
  const [KatoSerioOpacity, setKatoSerioOpacity] = useState(0);
  const [KatoFeliz, setKatoFeliz] = useState(null);
  const [KatoFelizOpacity, setKatoFelizOpacity] = useState(0);
  const [KatoNervioso, setKatoNervioso] = useState(null);
  const [KatoNerviosoOpacity, setKatoNerviosoOpacity] = useState(0);
  const [KatoSorprendido, setKatoSorprendido] = useState(null);
  const [KatoSorprendidoOpacity, setKatoSorprendidoOpacity] = useState(0);
  const [Indice, setIndice] = useState(1);
  const BorrarRopa = () =>{
    console.log("Borrado Ropa")
    /*Kurono*/
    setKuronoUniformeOpacity(0);
    setKuronoCamisaOpacity(0);
    setKuronoTrajeOpacity(0);
    /*Kato*/
    setKatoUniformeOpacity(0);
}
const BorrarExpresion = () =>{
    console.log("Borrado Expresion")
    /*Kurono*/
    setKuronoSerioOpacity(0);
    setKuronoFelizOpacity(0);
    setKuronoNerviosoOpacity(0);
    setKuronoSorprendidoOpacity(0);
    /*Kato*/
    setKatoSerioOpacity(0);
    setKatoFelizOpacity(0);
    setKatoNerviosoOpacity(0);
    setKatoSorprendidoOpacity(0);
}
  const MostrarPersonaje = () =>{
    setIndice(Indice + 1);
    console.log('Indice Actual:' + Indice);
    if(Kurono.ComprobarIndice(Indice)){
      console.log("Kurono")
      if(Indice<12||(Indice>13&&Indice<43)||Indice==47||Indice==57||(Indice>59&&Indice<69)||
      (Indice>71&&Indice<83)){
        if(KuronoSerioOpacity==0){
          BorrarExpresion();
          setKuronoSerioOpacity(1);
          }
      }else if(Indice==43||Indice==46||Indice==58||Indice==69||Indice==71){
          console.log("Nervioso")
          if(KuronoNerviosoOpacity==0){
            BorrarExpresion();
            setKuronoNerviosoOpacity(1);
            }         
      }else if(Indice==13){
          console.log("Feliz")
          if(KuronoFelizOpacity==0){
            BorrarExpresion();
            setKuronoSerioOpacity(1);
            }            
      }else if(Indice==50||Indice==51||Indice==54){
          console.log("Sorprendido")
          if(KuronoSorprendidoOpacity==0){
            BorrarExpresion();
            setKuronoSorprendidoOpacity(1);
            }                   
      }
/*Eventos Referentes a la Ropa de los personajes independiente de las decisiones */
      if(Indice<58){
          console.log("Uniforme");
          if(KuronoUniformeOpacity==0){
            BorrarRopa();
            setKuronoUniformeOpacity(1);
            }
      }else if(Indice==58){
          console.log("Animación Camisa");
          if(KuronoCamisaOpacity==0){
            BorrarRopa();
            setKuronoCamisaOpacity(1);
            }
      }else if(Indice<80){
        if(KuronoCamisaOpacity==0){
          BorrarRopa();
          setKuronoCamisaOpacity(1);
          } 
      }else{
        if(KuronoTrajeOpacity==0){
          BorrarRopa();
          setKuronoTrajeOpacity(1);
          }
        }
  }else if(Kato.ComprobarIndice(Indice)){
      console.log("Kato")
      if(Indice<91){
          console.log("Uniforme")
          if(KatoUniformeOpacity==0){
            BorrarRopa();
            setKatoUniformeOpacity(1);
            } 
      }
      if(Indice==12||Indice==15){
          console.log("Nervioso");
          if(KatoNerviosoOpacity==0){
            BorrarExpresion();
            setKatoNerviosoOpacity(1);
            } 
      }else if(Indice==4||Indice==39||Indice==44||Indice==48){
          console.log("Serio");
          if(KatoSerioOpacity==0){
            BorrarExpresion();
            setKatoSerioOpacity(1);
            } 
      }else if(Indice==41||Indice==45){
          console.log("Feliz");
          if(KatoFelizOpacity==0){
            BorrarExpresion();
            setKatoFelizOpacity(1);
            }        
      }else if(Indice==52||Indice==55){
          console.log("Sorprendido");
          if(KatoSorprendidoOpacity==0){
            BorrarExpresion();
            setKatoSorprendidoOpacity(1);
            }            
      }else{
          console.log("Serio");
          if(KatoSerioOpacity==0){
            BorrarExpresion();
            setKatoSerioOpacity(1);
            }
      }
    }
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
       KatoUniforme.downloadAsync(),KuronoSerio.downloadAsync(),KuronoNervioso.downloadAsync(),          
       KuronoFeliz.downloadAsync(),KuronoSorprendido.downloadAsync(),KatoSerio.downloadAsync(),
       KatoNervioso.downloadAsync(),KatoFeliz.downloadAsync(),KatoSorprendido.downloadAsync();        
      setKuronoUniforme(KuronoUniforme);
      setKuronoCamisa(KuronoCamisa);
      setKuronoTraje(KuronoTraje);
      setKatoUniforme(KatoUniforme);
      setKuronoSerio(KuronoSerio);
      setKuronoNervioso(KuronoNervioso);
      setKuronoFeliz(KuronoFeliz);
      setKuronoSorprendido(KuronoSorprendido);
      setKatoSerio(KatoSerio);
      setKatoNervioso(KatoNervioso);
      setKatoFeliz(KatoFeliz);
      setKatoSorprendido(KatoSorprendido);
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
      {/* Kurono */}
      <Image source={{...KuronoUniforme}} style={{...styles.image, opacity:KuronoUniformeOpacity}} cachePolicy={'memory'} />
      <Image source={{...KuronoCamisa}} style={{...styles.image, opacity:KuronoCamisaOpacity}} cachePolicy={'memory'} />
      <Image source={{...KuronoSerio}} style={{...styles.image, opacity:KuronoSerioOpacity}} cachePolicy={'memory'}/>
      <Image source={{...KuronoFeliz}} style={{...styles.image, opacity:KuronoFelizOpacity}} cachePolicy={'memory'} />
      <Image source={{...KuronoSorprendido}} style={{...styles.image, opacity:KuronoSorprendidoOpacity}} cachePolicy={'memory'} />
      <Image source={{...KuronoNervioso}} style={{...styles.image, opacity:KuronoNerviosoOpacity}} cachePolicy={'memory'} />
      <Image source={{...KatoUniforme}} style={{...styles.image, opacity:KatoUniformeOpacity}} cachePolicy={'memory'} />
      <Image source={{...KatoSerio}} style={{...styles.image,opacity:KatoSerioOpacity}} cachePolicy={'memory'} />
      <Image source={{...KatoFeliz}} style={{...styles.image,opacity:KatoFelizOpacity}} cachePolicy={'memory'} />
      <Image source={{...KatoSorprendido}} style={{...styles.image,opacity:KatoSorprendidoOpacity}} cachePolicy={'memory'} />
      <Image source={{...KatoNervioso}} style={{...styles.image,opacity:KatoNerviosoOpacity}} cachePolicy={'memory'} />

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