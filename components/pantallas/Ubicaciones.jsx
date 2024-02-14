import {View, FlatList} from 'react-native'
import { ElementoFlatList } from '../ElementoFlatList'
import { StatusBar } from 'expo-status-bar'
import { styles } from '../../styles/contenedores';

const DATA_CAMPUS = [
    {
      id: 1,
      src: "https://ceutec.hn/wp-content/uploads/2023/08/sede-ceutec-el-prado-tegucigalpa.jpg",
      titulo: "CEUTEC TEGUCIGALPA",
      descripcion: "Prado"
    },
    {
      id: 2,
      src: "https://ceutec.hn/wp-content/uploads/2023/08/sede-ceutec-centroamerica-tegucigalpa.jpg",
      titulo: "CEUTEC TEGUCIGALPA",
      descripcion: "Centro América"
    },
    {
      id: 3,
      src: "https://ceutec.hn/wp-content/uploads/2023/08/sede-ceutec-norte-san-pedro-sula.jpg",
      titulo: "Norte San Pedro Sula",
      descripcion: "San Pedro Sula"
    },
    {
      id: 4,
      src: "https://ceutec.hn/wp-content/uploads/2023/08/sede-ceutec-norte-san-pedro-sula.jpg",
      titulo: "Norte San Pedro Sula",
      descripcion: "San Pedro Sula"
    },
    {
      id: 5,
      src: "https://ceutec.hn/wp-content/uploads/2023/08/sede-ceutec-norte-san-pedro-sula.jpg",
      titulo: "Norte San Pedro Sula",
      descripcion: "San Pedro Sula"
    },
    {
      id: 6,
      src: "https://ceutec.hn/wp-content/uploads/2023/08/sede-ceutec-norte-san-pedro-sula.jpg",
      titulo: "Norte San Pedro Sula",
      descripcion: "San Pedro Sula"
    },
    {
      id: 7,
      src: "https://ceutec.hn/wp-content/uploads/2023/08/sede-ceutec-el-prado-tegucigalpa.jpg",
      titulo: "CEUTEC TEGUCIGALPA",
      descripcion: "Prado"
    },
    {
      id: 8,
      src: "https://ceutec.hn/wp-content/uploads/2023/08/sede-ceutec-centroamerica-tegucigalpa.jpg",
      titulo: "CEUTEC TEGUCIGALPA",
      descripcion: "Centro América"
    },
    {
      id: 9,
      src: "https://ceutec.hn/wp-content/uploads/2023/08/sede-ceutec-norte-san-pedro-sula.jpg",
      titulo: "Norte San Pedro Sula",
      descripcion: "San Pedro Sula"
    },
    {
      id: 10,
      src: "https://ceutec.hn/wp-content/uploads/2023/08/sede-ceutec-norte-san-pedro-sula.jpg",
      titulo: "Norte San Pedro Sula",
      descripcion: "San Pedro Sula"
    },
    {
      id: 11,
      src: "https://ceutec.hn/wp-content/uploads/2023/08/sede-ceutec-norte-san-pedro-sula.jpg",
      titulo: "Norte San Pedro Sula",
      descripcion: "San Pedro Sula"
    },
    {
      id: 12,
      src: "https://ceutec.hn/wp-content/uploads/2023/08/sede-ceutec-norte-san-pedro-sula.jpg",
      titulo: "Norte San Pedro Sula",
      descripcion: "San Pedro Sula"
    },
  ]
  
export const Ubicaciones = () => {
    return <View style={styles.container}>
        <FlatList
            data={DATA_CAMPUS}
            renderItem={({item}) => <ElementoFlatList src={item.src} titulo={item.titulo} descripcion={item.descripcion} />}
            keyExtractor={item => item.id}
          />
          <StatusBar style="auto" />
        </View>
}

/* 
<Logo/> 
          <EncabezadoPrincipal texto="Bienvenida para el usuario"></EncabezadoPrincipal>
          <EncabezadoPrincipal texto="Este es una aplicación de saludos" destacar={true}></EncabezadoPrincipal>
          <Encabezado texto="Bienvenido"></Encabezado>
          <Encabezado texto="Por favor, escribe tu nombre"></Encabezado>
          <Text>Luego te daremos la bienvenida</Text>
          <Formulario></Formulario>
*/