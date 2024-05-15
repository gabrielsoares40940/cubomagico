import { View, StatusBar, SectionList, Text, StyleSheet } from 'react-native';

const DATA = [
  {
    titulo: 'Eletrônicos',
    data: ['TVs', 'Celulares', 'Câmeras Digitais', 'CDs', 'Caixas de Som']  
  },

  {
    titulo: 'Vestuários',
    data: ['Camisas', 'Camisetas', 'Calças Jeans', 'Bermudas', 'Sapatos']  
  },

  {
    titulo: 'Livros',
    data: ['Ficção', 'Suspense', 'Policial', 'Terror', 'Fantasia']  
  }
];

const Item = ({titulo}) => (
  <View style={estilos.titulo}>
    <Text style={estilos.item}>{titulo}</Text>
  </View>
)

const Listas = () => (
  <View style={estilos.janela}>
    <SectionList
      sections = {DATA}
      keyExtractor = {(item, index) => item+index}
      renderItem = {({item}) => <Item titulo = {item}/>}
      renderSectionHeader = {({section: {titulo}})=>(
        <Text style={estilos.header}>{titulo}</Text>
      )}
    />
  </View>
)

const estilos = StyleSheet.create({
  janela: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 10,
  },
  
  item: {
    backgroundColor: '#fffccc',
    padding: 10,
    marginVertical: 8
  },

  titulo: {
    fontSize: 18
  },

  header: {
    fontSize: 24
  }
})

export default Listas;