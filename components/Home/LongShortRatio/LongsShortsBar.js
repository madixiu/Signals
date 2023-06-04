import React from 'react'
import { View,StyleSheet } from 'react-native'
// import LongShortRatioCalc from './misc/LongShortRatioCalc'
function BarWidth(Long,Short) {
  let total = Long + Short;
  let LongPercentage = ((Long*100) / total).toString() + '%'
  let ShortPercentage = ((Short*100) / total).toString() + '%'
  Long = Math.trunc(Long)
  Short = Math.trunc(Short)
  let result = {'Long':Long,'Short':Short,'LongPercentage':LongPercentage,'ShortPercentage':ShortPercentage} 
  return result
}
const LongsShortsBar = (props) =>{
  // const data = LongShortRatioCalc(props.Long,props.Short)
  return (
    <View style={styles.container}>
      <View style={[styles.longBar, {width:BarWidth(props.Long,props.Short).LongPercentage}]}></View>
      <View style={[styles.shortBar,{width:BarWidth(props.Long,props.Short).ShortPercentage}]}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row'
  },
  longBar:{
    backgroundColor:'green',
    paddingVertical:2,

  },
  shortBar:{
    backgroundColor:'red',
    paddingVertical:2,

  }
});
export default LongsShortsBar;