import React, { useState } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const COORDENADAS = [
    {
        id: 1,
        titulo: 'Ubicacion 1',
        ubicacion: {
            latitude: 14.118408312265402,
            longitude: -86.44051536920097
        },
        descripcion: "Destino turistico"
    },
    {
        id: 2,
        titulo: 'Ubicacion 2',
        ubicacion: {
            latitude: 13.118408312265402,
            longitude: -85.44051536920097
        },
        descripcion: "Destino turistico 2"
    },
    {
        id: 3,
        titulo: 'Ubicacion 3',
        ubicacion: {
            latitude: 14.118408312265402,
            longitude: -87.44051536920097
        },
        descripcion: "Destino otro"
    },
    {
        id: 4,
        titulo: 'Ubicacion 4',
        ubicacion: {
            latitude: 12.118408312265402,
            longitude: -86.44051536920097
        },
        descripcion: "Destino nuevo"
    },
]


export function Mapa() {
    const [ubicacionActual, setUbicacionActual ] = useState({latitude: 14.118408312265402, longitude: -86.44051536920097})
    function mostrarPOI(){
        return COORDENADAS.map((ubicacion) =>{
            return <Marker 
            key={ubicacion.id}
            coordinate={ubicacion.ubicacion}
            title={ubicacion.titulo}
            description={ubicacion.ubicacion}
        />
        })
    }

    console.log(ubicacionActual)

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      //onRegionChange={(region) => console.log(region)} 
      initialRegion={{"latitude": 14.11840831226543, "latitudeDelta": 13.378224000962506, "longitude": -86.44051536920097, "longitudeDelta": 7.338866999999979}}
      >
        {/* {mostrarPOI()} */}
        {/* <Marker 
            coordinate={{
                latitude: 14.118408312265402,
                longitude: -86.44051536920097
            }}
            title='Ubicacion 1'
            description='Un destino turistico'
        /> */}
        <Marker 
            draggable
            coordinate={ubicacionActual}
            onDragEnd={e => setUbicacionActual(e.nativeEvent.coordinate)}
            title='Ubicacion 2'
            description='Un lugar historico'
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});