import { Text, View } from 'react-native'
import { styles } from '../styles/contenedores'

//  const EncabezadoPrincipal = ({texto, destacar}) => {
//     const estilo = !(destacar === true) ? styles.negrita : styles.fuenteAzulNegrita;

//     return <View>
//       <Text style={estilo}>{texto}</Text>
//     </View>
//   }

//Solo un default.
function EncabezadoPrincipal({texto, destacar}) {
  const estilo = !(destacar === true) ? styles.negrita : styles.fuenteAzulNegrita

  return <View>
    <Text style={estilo}>{texto}</Text>
  </View>
}

//Export nombrado.
export const Encabezado = ({texto}) =>{
  return <View>
  <Text>{texto}</Text>
</View>
}

const Funcion1 = () => {
  return <View><Text>Hola</Text></View>
}
const Funcion2 = () => {
  return <View><Text>Hola</Text></View>
}
const Funcion3 = () => {
  return <View><Text>Hola</Text></View>
}
const Funcion4 = () => {
  return <View><Text>Hola</Text></View>
}

export {Funcion1, Funcion2, Funcion3, Funcion4}

export default EncabezadoPrincipal