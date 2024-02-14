//Navegacion
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

//Componentes de react native
import { StyleSheet } from 'react-native';

//Pantallas
import { Tabs } from './components/Tabs';
import { NavegacionGabetero } from './components/Drawer';
import { TopTabs } from './components/TopTabs';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
    marginLeft: 12,
    marginRight: 12
  }
})

//JSX
export default function App() {
  
  return (<NavigationContainer style={styles.container}>
          {/* <Tabs/> */}
          {/* <NavegacionGabetero/> */}
          <TopTabs/>
    </NavigationContainer>
  );
}






