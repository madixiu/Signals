import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import LongsShortsBar from './LongShortRatio/LongsShortsBar'

// import LongShortView from './LongShortRatio/LongShortView'

const LongShortCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Title</Text>
      </View>
     
     
      <View style={{padding:10}}>
      <View style={{justifyContent: 'space-between',flexDirection:'row'}}>
        <View>
          <Text>Longs</Text>
        </View>
        <View>
          <Text>Longs</Text>
        </View>
      </View>
      <LongsShortsBar Long={64} Short={36}/>
      <View style={{justifyContent: 'space-between',flexDirection:'row'}}>
        <View>
          <Text>Shorts</Text>
        </View>
        <View>
          <Text>Shorts</Text>
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
export default LongShortCard