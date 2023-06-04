import React from 'react'
import {View,StyleSheet} from 'react-native'
import LongShortCard from '../components/Home/LongShortCard'
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.liqViewContainer}>
        <LongShortCard ></LongShortCard>
        <LongShortCard ></LongShortCard>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    // backgroundColor:'gainsboro'
  },
  liqViewContainer:{
    
    flexDirection:'row',
    // justifyContent:'space-around',
    // paddingHorizontal:'51px',
    justifyContent: 'space-around',
    paddingVertical: 10,
    // paddingHorizontal:8

  }
});

export default Home;