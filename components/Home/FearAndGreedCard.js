import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'


function indexColor(index) {
  index = parseInt(index)
  let color = '';
  if (0<=index && index <11)
  color = '#da755a';
  else if (11<=index && index<21)
  color = '#dd835d'
  else if (21<=index && index<31)
  color = '#e39c63';
  else if (31<=index && index<41)
  color = '#e7ac68';
  else if (41<=index && index<51)
  color = '#e6c767';
  else if (51<=index && index<61)
  color = '#e1df6b';
  else if (61<=index && index<71)
  color = '#c1d361';
  else if (71<=index && index<81)
  color = '#b0e469';
  else if (81<=index && index<91)
  color = '#99e368';
  else
  color = '#7bd85e';

  return color;
}
const FearAndGreedCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={{ uri: props.logo, cache: 'force-cache'}} 
            style={{ width: 16, height: 16,marginLeft: 2,marginRight:5 }}
          />
        <Text>Alternative</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={{color:'#424242'}}>Fear & Greed Index</Text>
      </View>
      <View style={styles.index}>
        <Text style={{color:indexColor(props.data.value)}}>{props.data.value_classification}</Text>
        <Text style={{color:indexColor(props.data.value)}}>{props.data.value}</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'46%',
    backgroundColor:'gainsboro',
    borderRadius:'8px',
  },
  header:{
    flexDirection:'row',  
    paddingVertical:10,
    paddingHorizontal:10
  },
  subHeader:{
    // paddingVertical:10,
    paddingHorizontal:10

  },
  index:{
    flexDirection:'row',
    paddingHorizontal:10,
    paddingVertical:10,
    justifyContent: 'space-between',


  }
});
export default FearAndGreedCard