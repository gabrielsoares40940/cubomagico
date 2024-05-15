import { Component } from 'react'
import { View, Text, TextInput, Button, ActivityIndicator, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'

import firebase from 'firebase'
import { estilos } from '../css/estilos'

export default class Cadastro extends Component{
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      displayName: ''
    }
  }

  atualizarValor = (valor, props) => {
    const state = this.state;
    state[props] = valor;
    this.setState(state)
  }

  cadastrar = () => {
    if(this.state.email===''|| this.state.password==='' || this.state.displayName===''){
      alert("Usuário ou senha inválido!");
      this.setState({isLoading: false})
    } else {
      this.setState({isLoading:true})
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((response) =>{
        response.user.updateProfile({
          displayName:this.state.displayName
        })
        this.setState({
          email: '',
          password: '',
          isLoading: false,
          displayName: ''
        })
        alert("Cadastro realizado com sucesso!")
        this.props.navigation.navigate('TelaLogin')
      }).catch((error)=>{
          alert("error: "+error)
        this.setState({
            messageError: error
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
            <TextInput style={estilos.input} placeholder="Nome completo" value={this.state.displayName} onChangeText={(val)=>this.atualizarValor(val, "displayName")}/>
            <TextInput style={estilos.input} placeholder="Usuário" value={this.state.email} onChangeText={(val)=>this.atualizarValor(val, "email")}/>
            <TextInput style={estilos.input} placeholder="Senha" value={this.state.password} onChangeText={(val)=>this.atualizarValor(val, "password")} secureTextEntry={true} maxLength={8}/>

            <Button title="Cadastrar" onPress={()=>this.cadastrar()}/>
            <Text onPress={()=>this.props.navigation.navigate('TelaLogin')} style={estilos.textLink}>
              Já possui conta? Clique aqui para fazer login!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}