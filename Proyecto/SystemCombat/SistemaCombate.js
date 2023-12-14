import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';

export default function App() {

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Text>System Combat</Text>
      </View>
      <View style={{...styles.Recuadro,...styles.Estadisticas}}>
        <Text style={styles.Texto}>Kei</Text>
      </View>
      <View style={{...styles.Recuadro,...styles.Dialogos}}>
        <Text style={styles.Texto}>Dialogos</Text>
      </View>
      <View style={{...styles.Recuadro,...styles.Acciones}}>
        <Text style={styles.Texto}>Acciones</Text>
      </View>
    </>
  );
}
const windowHeight = Dimensions.get('window').height;
const vh = windowHeight * 0.01;
const windowWidth = Dimensions.get('window').width;
const vw = windowWidth * 0.01;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Recuadro: {
    height: 20*vh,
    width: 20*vw,
    borderRadius:2*vh,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor:"black"
  },
  Acciones:{
    position: "absolute",
    top: 10*vh,
    left: 60*vw
  },
  Dialogos:{
    position: "absolute",
    top: 60*vh,
    left: 33*vw
  },
  Estadisticas:{
    position: "absolute",
    top: 10*vh,
    left: 10*vw
  },
  Texto: {
    color:'white',
    textAlign: "center",
    marginTop: 1*vh
  },
});
