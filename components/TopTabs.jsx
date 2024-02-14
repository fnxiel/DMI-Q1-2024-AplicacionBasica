
//Iconografia
import Icon from 'react-native-vector-icons/Ionicons'

//Navegacion
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Componentes de pantalla
import { Ubicaciones } from './pantallas/Ubicaciones';
import { Mapa } from './pantallas/Mapa';
import { Settings } from './pantallas/Settings';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return <Tab.Navigator style={{marginTop: 40}} >
                <Tab.Screen name="Inicio" component={Ubicaciones} />
                <Tab.Screen name="Mapa" component={Mapa} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
}
