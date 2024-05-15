import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { WebView } from 'react-native-webview'

import firebase from 'firebase'
import firebaseConfig from './modulo-gestao/database/dbFirebase'
import Login from './modulo-gestao/view/login'
import Cadastro from './modulo-gestao/view/cadastro'
import Listas from './modulo-gestao/view/listas'
import rubiksCube from './modulo-gestao/view/cubo'
import Tutorial from './modulo-gestao/view/tutorial'

const Stack = createStackNavigator();

function Menu() {
  return(
    <Stack.Navigator initialRouteName ='TelaLogin'>
      <Stack.Screen name='TelaLogin' component={Login}/>
      <Stack.Screen name='TelaCadastro' component={Cadastro}/>
      <Stack.Screen name='TelaListas' component={Listas}/>
      <Stack.Screen name='Cubo' component={rubiksCube}/>
      <Stack.Screen name='Tutorial' component={Tutorial}/>
    </Stack.Navigator>
  )
}

export default function App() {
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  return(
    <NavigationContainer>
      <Menu/>
    </NavigationContainer>
  )
}