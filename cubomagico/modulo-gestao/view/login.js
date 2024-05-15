import { Component } from 'react'
import { View, Text, TextInput, Button, ActivityIndicator, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'

import firebase from 'firebase'
import { estilos } from '../css/estilos'

export default class Login extends Component{
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false
    }
  }

  atualizarValor = (valor, props) => {
    const state = this.state;
    state[props] = valor;
    this.setState(state)
  }

  userLoging = () => {
    if(this.state.email===''|| this.state.password===''){
      alert("Usuário ou senha inválido!")
      this.setState({isLoading: false})
    } else {
      this.setState({isLoading:true})
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((response) =>{
        this.setState({
          email: '',
          password: '',
          isLoading: false
        })
        this.props.navigation.navigate('Tutorial')
      }).catch((error)=>{
        this.setState({
            MessageError: error
        })
      })
    }
  }
  
  render() {
    if (this.state.isLoading){
      return(
      <View>
        <ActivityIndicator size="large" color="#3740fe" />
      </View>
      )
    }

    return(
      <View style={estilos.container}>
        <View style={estilos.containerLogo}>
          <Animatable.Image
            animation="flipInY"
            source={require('../images/logooficial.png')}
            style={{width:'100%'}}
            resizeMode ="contain"
          />
          <TouchableOpacity style={estilos.input}>
            <TextInput style={estilos.input} placeholder="Usuário" value={this.state.email} onChangeText={(val)=>this.atualizarValor(val, "email")}/>
            <TextInput style={estilos.input} placeholder="Senha" value={this.state.password} onChangeText={(val)=>this.atualizarValor(val, "password")} secureTextEntry={true} maxLength={8}/>

            <Button title="Logar" onPress={()=>this.userLoging()}/>
            <Text onPress={()=>this.props.navigation.navigate('TelaCadastro')} style={estilos.textLink}>
              Não possui conta? Clique aqui para cadastrar!
            </Text>
            <Text onPress={()=>this.props.navigation.navigate('Cubo')} style={estilos.textLink}>
              Teste
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}