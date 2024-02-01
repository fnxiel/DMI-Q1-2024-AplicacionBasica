import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Button } from 'react-native';
import {PiePagina} from './components/PiePagina'
import EncabezadoPrincipal, {Encabezado} from './components/Encabezado';
import { Formulario } from './components/Formulario';
import { styles } from './styles/contenedores';


//JSX
export default function App() {
  
  return (
    <View style={styles.container}>
      <EncabezadoPrincipal texto="Bienvenida para el usuario"></EncabezadoPrincipal>
      <EncabezadoPrincipal texto="Este es una aplicación de saludos" destacar={true}></EncabezadoPrincipal>
      <Encabezado texto="Bienvenido"></Encabezado>
      <Encabezado texto="Por favor, escribe tu nombre"></Encabezado>
      <Text>Luego te daremos la bienvenida</Text>
      <Formulario></Formulario>
      <StatusBar style="auto" />
    </View>
  );
}




