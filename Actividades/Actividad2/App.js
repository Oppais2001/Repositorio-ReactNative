import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View, Linking} from 'react-native';
import { Card } from "react-native-elements";

export default function App() {
  const url = 'https://www.ulagos.cl/';

  const AbrirEnlace = async () => {
    const canOpenURL = await Linking.canOpenURL(url);

    if (canOpenURL) {
      await Linking.openURL(url);
    } else {
      console.log(`No se pudo abrir la URL: ${url}`);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Sedes Universidad de Los Lagos</Text>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={AbrirEnlace}>
        <Card containerStyle={styles.containerCard}>
            <Card.Title>Sede Osorno</Card.Title>
            <Card.Image
            source={require('./assets/img/Osorno.jpeg')}
            style={styles.images}
            />
        </Card>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={AbrirEnlace}>
        <Card containerStyle={styles.containerCard}>
            <Card.Title>Sede Puerto Montt</Card.Title>
            <Card.Image
            source={require('./assets/img/Pto-Montt.jpg')}
            style={styles.images}
            />
        </Card>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={AbrirEnlace}>
        <Card containerStyle={styles.containerCard}>
            <Card.Title>Sede Puerto Chiloe</Card.Title>
            <Card.Image
            source={require('./assets/img/Chiloe.jpeg')}
            style={styles.images}
            />
        </Card>
      </TouchableWithoutFeedback>

    </View>
  );
}
const vh = Dimensions.get('window').height * 0.01;
const vw = Dimensions.get('window').width * 0.01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCard: {
    height: 25*vh,
    width: 90*vw,
    backgroundColor: 'grey',
    borderRadius: 2*vh
  },
  images: {
    position: 'relative',
    top: 0,
    left: 0,
    width: 90*vw,
    height: 15*vh
  },
  Sede: {
    position: 'relative',
    top: 0,
  }
});
