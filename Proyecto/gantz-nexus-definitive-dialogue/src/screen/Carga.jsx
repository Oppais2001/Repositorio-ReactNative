import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { EstilosCarga } from './Estilos';

export default function Carga(){
    return(
    <View style={EstilosCarga.PantallaCarga}>
        <Text style={EstilosCarga.TextoCarga}>Cargando...</Text>
    </View>
    );
}

