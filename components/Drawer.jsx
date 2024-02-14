//Componentes de pantalla
import { Ubicaciones } from './pantallas/Ubicaciones';
import { Mapa } from './pantallas/Mapa';
import { Settings } from './pantallas/Settings';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export function NavegacionGabetero() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Ubicaciones} />
      <Drawer.Screen name="Mapa" component={Mapa} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}