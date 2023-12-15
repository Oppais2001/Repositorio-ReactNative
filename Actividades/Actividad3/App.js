import React from "react";
import {StyleSheet, Text, ScrollView, Dimensions, View} from "react-native";
import { Card } from "react-native-elements";
const HorizontalScroll = () => {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ width: Dimensions.get('window').width, backgroundColor: 'gold' }}>
            <Card containerStyle={Style.container}>
            <Card.Title style={Style.title}>Pikachu</Card.Title>
            <Card.Image
            source={{uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png'}}
            style={Style.images}
            />
            <Card.Divider/>
                <Text style={{...Style.Recuadro,backgroundColor:'gold'}}>Electricidad</Text>
        </Card>
        </View>
        <View style={{ width: Dimensions.get('window').width, backgroundColor: 'orange' }}>
            <Card containerStyle={Style.container}>
            <Card.Title style={Style.title}>Charmander</Card.Title>
            <Card.Image
            source={{uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png'}}
            style={Style.images}
            />
            <Card.Divider/>
                <Text style={{...Style.Recuadro,backgroundColor:'orange'}}>Fuego</Text>
            </Card>
        </View>
        <View style={{ width: Dimensions.get('window').width, backgroundColor: 'lightblue'}}>
        <Card containerStyle={Style.container}>
            <Card.Title style={Style.title}>Vaporeon</Card.Title>
            <Card.Image
            source={{uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png'}}
            style={Style.images}
            />
            <Card.Divider/>
                <Text style={{...Style.Recuadro,backgroundColor:'lightblue'}}>Agua</Text>
            </Card>
        </View>
      </ScrollView>
    );
  };

const Style = StyleSheet.create({
    container: {marginTop: 50,alignItems: "center",
      width: Dimensions.get('window').width*0.75,
      height: Dimensions.get('window').height*0.42,
      position: "absolute",
      left:Dimensions.get('window').width*0.075,
      top: Dimensions.get('window').height*0.24,
      backgroundColor: "lightgrey",
      borderRadius: 10},
    Recuadro:{textAlign:"center",color: "white", borderRadius: 10},
    title: {marginTop: 10, color:'black',textAlign:"center"},
    images: {width: 200, height: 200,borderWidth: 1, borderColor: "black"},
    button: {width: 100, backgroundColor: 'lightpink', borderRadius: 10, alignSelf:"center"}
});
export default HorizontalScroll;