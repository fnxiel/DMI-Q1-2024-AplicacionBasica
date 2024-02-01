import { useState } from 'react';
import { Text, TextInput, View, Button, Alert } from 'react-native';
import { PiePagina } from './PiePagina'

export const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    return <View>
        <Text>Nombre de la persona: </Text>
        <TextInput
            onChangeText={(e) => { setNombre(e) }}
            value={nombre}
            placeholder='Ej. John'
        ></TextInput>
        <Text>Edad: </Text>
        <TextInput
            onChangeText={(e) => { setEdad(e) }}
            value={edad}
            placeholder='Ej. 25'
            keyboardType='numeric'
        ></TextInput>
        <PiePagina></PiePagina>
        <Text>Tu nombre es: {nombre} con {edad} años de edad, mucho gusto</Text>
        <Button title='Saludar' color="#841584" onPress={
            () => { 
                console.log(nombre, edad) 
                Alert.alert("Saludar", `Hola ${nombre} con edad, ${edad} años`)
            }
        }>

        </Button>
    </View>
}

