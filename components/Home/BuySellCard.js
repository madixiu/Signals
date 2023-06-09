import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import LongsShortsBar from './LongShortRatio/LongsShortsBar'

const BuySellCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>All spot markets</Text>
      </View>
      <View style={{padding:10}}>
        <View style={{justifyContent: 'space-between',flexDirection:'row'}}>
          <View>
            <Text>Buy</Text>
          </View>
          <View>
            <Text>Buy</Text>
          </View>
        </View>
        <LongsShortsBar Long={64} Short={36}/>
        <View style={{justifyContent: 'space-between',flexDirection:'row'}}>
          <View>
            <Text>Sell</Text>
          </View>
          <View>
            <Text>Sell</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
        
    width:'42%',
    backgroundColor:'gainsboro',
    borderRadius:'8px',
    // padding: '50px',
    // paddingVertical:40
  },
  header: {
    // backgroundColor:'red',
    paddingVertical:10,
    paddingHorizontal:10
  }
});
export default BuySellCard