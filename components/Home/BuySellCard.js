import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import LongShortView from './LongShortRatio/LongShortView'

const Card = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Title</Text>
      </View>
      <LongShortView />
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
export default Card