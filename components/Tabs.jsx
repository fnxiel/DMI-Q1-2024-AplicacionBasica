
//Iconografia
import Icon from 'react-native-vector-icons/Ionicons'

//Navegacion
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Componentes de pantalla
import { Ubicaciones } from './pantallas/Ubicaciones';
import { Mapa } from './pantallas/Mapa';
import { Settings } from './pantallas/Settings';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>{
            let nombreIcono

            switch (route.name) {
                case 'Inicio':
                    nombreIcono = focused ? "home" : "home-outline"
                    break;

                case 'Mapa':
                    nombreIcono = focused ? "map" : "map-outline"
                    break;
            
                default:
                    nombreIcono = focused ? "settings" : "settings-outline"
                    break;
            }
            return <Icon name={nombreIcono} size={size} color={color} />
        }
    })}>
                <Tab.Screen name="Mapa" component={Mapa} />
                <Tab.Screen name="Inicio" component={Ubicaciones} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
}
