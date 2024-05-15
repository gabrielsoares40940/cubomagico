import { StyleSheet } from 'react-native'

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 25,
    backgroundColor: '#175086',
    paddingBottom:100

  },
  input:{
    width: '100%',
    padding: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  titulo: {},
  textLink:{
    textAlign: 'center',
    marginTop: 15,
    color: 'black'
  },
  containerLogo:{
    flex:2,
    paddingBottom:70,
    justifyContent:'center',
    alignItems:'center',
  },
  separator: {
    height: 20,
    
  }
})