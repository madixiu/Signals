import { View, Text,Button } from 'react-native'
import React from 'react'


function backBotton(navigation){
  // console.log(navigation,route);
  navigation.navigate('ListComponent')
}


const ItemDetail = ({navigation,route}) => {
  return (
    <View style={{flex:1,backgroundColor:'#999'}}>
    <Text>{route.params?.data.symbol}</Text>
    <Text>{route.params?.data.name }</Text>
    <Text>{route.params?.data.rank }</Text>
    <Text>{route.params?.data.price }</Text>
    <Text>{route.params?.data.change24h }</Text>
    <Text>{route.params?.data.change1h }</Text>
    <Text>{route.params?.data.change7d }</Text>
    <Text>{route.params?.data.volume_24h }</Text>
    <Text>{route.params?.data.market_cap }</Text>
    <Text>{route.params?.data.circulating_supply }</Text>
    <Text>{route.params?.data.total_supply }</Text>
    <Text>{route.params?.data.max_supply }</Text>
    <Text>{route.params?.data.last_updated }</Text>

    <Button
        onPress={() => {backBotton(navigation,route)}}
        title="Back"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
  </View>
  )
}

export default ItemDetail