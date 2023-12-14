import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback} from 'react-native';

export default function App() {
  const [button, setButton] = useState(false);

  if (!button){
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={()=>{setButton(true)}}>
          <Text style={styles.boton}>Presiona para saludar</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }else{
    return(
      <View style={styles.container}>
        <Text>¡¡¡Hola Mundo!!!</Text>
      </View>
    )
  }
}
vh = Dimensions.get('window').height * 0.01
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    width: 25*vh,
    height: 5*vh,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 1*vh
  }
});
