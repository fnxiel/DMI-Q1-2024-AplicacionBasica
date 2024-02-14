import { useState } from 'react';
import {View, Image, StyleSheet, Pressable, Modal, Text, TouchableOpacity, Alert} from 'react-native'
import { ContenidoModal } from './ContenidoModal';


export const ElementoFlatList = ({src, titulo, descripcion}) => {
    const [modalVisible, setModalVisible] = useState(false)
    //Object destructuring
    return <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
            }}>
            <ContenidoModal
            titulo={titulo} descripcion={descripcion} modalVisible={modalVisible} setModalVisible={setModalVisible} textoBoton = "Contactar"
             />
        </Modal>
        <View style={{paddingTop: 50, flexDirection: "row"}}>
        <Image 
            style={{width: 65, height: 65, marginRight: 10, borderRadius: 25}}
            source={{uri: src}}
        />
        <View style={{flexDirection: "column"}}>
        <Text>
            {titulo}
        </Text>
        <Text>
            {descripcion}
        </Text>
        </View>
    </View>
    </TouchableOpacity>
}
