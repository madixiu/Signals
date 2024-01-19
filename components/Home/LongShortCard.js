import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import LongsShortsBar from './LongShortRatio/LongsShortsBar'
import { bigNumberOptimizer } from '../misc/numberOptimizer' 


const LongShortCard = (props) => {

  const CardHeader = () =>{
    if (props.name == 'cryptometerio'){
      return(
        <View style={styles.headerCryptometer}>
        <Image source={{ uri: props.logo, cache: 'force-cache'}} 
              style={{ width: '100%', height: 9,marginLeft: 2,marginRight:5 }}
            />
        </View>
      )
    }
    else{
      return(
        <View style={styles.header}>
        <Image source={{ uri: props.logo, cache: 'force-cache'}} 
              style={{ width: 16, height: 16,marginLeft: 2,marginRight:5 }}
            />
          <Text>{props.name}</Text>
        </View>
      )
    }
  }
  return (
    <View style={styles.container}>
      
      <CardHeader />
     
     
    <View style={{padding:10}}>
      <View style={{justifyContent: 'space-between',flexDirection:'row'}}>
        <View>
          <Text>Longs</Text>
        </View>
        <View>
          <Text>{bigNumberOptimizer(props.longs)}</Text>
        </View>
      </View>
      <LongsShortsBar Long={props.longs} Short={props.shorts}/>
      <View style={{justifyContent: 'space-between',flexDirection:'row'}}>
        <View>
          <Text>{bigNumberOptimizer(props.shorts)}</Text>
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
        
    width:'46%',
    backgroundColor:'gainsboro',
    borderRadius:8,
    // padding: '50px',
    // paddingVertical:40
  },
  header: {
    flexDirection:'row',
    paddingVertical:10,
    paddingHorizontal:10
  },
  headerCryptometer: {
    paddingVertical:10,
    paddingLeft:10,
    paddingRight:'30%'
  }
});
export default LongShortCard