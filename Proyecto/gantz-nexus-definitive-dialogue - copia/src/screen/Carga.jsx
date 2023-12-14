import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet,  Dimensions} from "react-native";

export default function Carga(){
    return(
    <View style={EstiloCarga.PantallaCarga}>
        <Text style={EstiloCarga.TextoCarga}>Cargando...</Text>
    </View>
    );
}

const windowHeight = Dimensions.get('window').height;
const vh = windowHeight * 0.01;
const windowWidth = Dimensions.get('window').width;
const vw = windowWidth * 0.01;

const EstiloCarga = StyleSheet.create({
    'PantallaCarga': {
        backgroundColor: "black",
        height: windowHeight,
        width: windowWidth + 7*vw,
        position:'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center'
    },
    'TextoCarga': {
        fontFamily: 'Genjiro',
        fontSize:12*vh,
        color: 'red',
        color:'red',
        textAlign:'center',
    }
})