import { FastImage } from 'react-native-fast-image'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'

export default function Tutorial() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{height:700, width: '100%'}}>
        <FastImage
          style={{height: 700, width:400}}
          source={{
            uri: 'https://static.wikia.nocookie.net/titioavo/images/1/17/UncleGrandpa.png/revision/latest/scale-to-width-down/200?cb=20140108192726&path-prefix=pt-br'
          }}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            backgroundColor: 'pink',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
          }}>
          <Text>Press me</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
}