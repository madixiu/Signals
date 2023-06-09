import React,{useState,useEffect} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import LongShortCard from '../components/Home/LongShortCard'
import BuySellCard from '../components/Home/BuySellCard'
import FearAndGreedCard from '../components/Home/FearAndGreedCard'
import Divider from '../components/Home/Divider'
import axios from 'axios'
import jsonData from '../assets/mockData.json'

const getLogos = () => {
  let logos = []
  for (item of  jsonData){
    if (item.name != 'AllSpotMarkets')
    logos.push(item.logo)
  }
  return logos
}

const Home = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  //* fear and greed url FOR NOW!
  const url = 'https://api.coin-stats.com/v2/fear-greed';
  //? getting data here with the hook

  //! WRITE THE AXIOS CALL TO GET THE DATA !!!
  //! HERE ^^^^^^^^^^^^
  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setData(res.data.now);
        console.log(res.data.now);
        setLoading(false); 
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setData(null);
      });
  }, []);

  if (loading) 
  return (
  <View style={{alignItems: 'center',flex:1,justifyContent: 'center',}}>
    <Text>Loading...</Text>  
  </View>
  )

  else 
  return (
    <View style={styles.container}>
      <Divider title={'24h Liquidations'}/>
      <View style={styles.liqViewContainer}>
        <LongShortCard name={jsonData[0].name} logo={jsonData[0].logo} longs={jsonData[0].Longs} shorts={jsonData[0].Shorts}></LongShortCard>
        <FearAndGreedCard logo={jsonData[1].logo} data={data}></FearAndGreedCard>
      </View>
      <Divider title={'Long & Shorts Ratio'}/>
      <View style={styles.liqViewContainer}>
        <LongShortCard name={jsonData[2].name} logo={jsonData[2].logo} longs={jsonData[2].Longs} shorts={jsonData[2].Shorts}></LongShortCard>
        <LongShortCard name={jsonData[3].name} logo={jsonData[3].logo} longs={jsonData[3].Longs} shorts={jsonData[3].Shorts}></LongShortCard>
      </View>
      <View style={styles.liqViewContainer}>
        <LongShortCard name={jsonData[4].name} logo={jsonData[4].logo} longs={jsonData[4].Longs} shorts={jsonData[4].Shorts}></LongShortCard>
        <LongShortCard name={jsonData[5].name} logo={jsonData[5].logo} longs={jsonData[5].Longs} shorts={jsonData[5].Shorts}></LongShortCard>
      </View>
      <View style={styles.liqViewContainer}>
        <LongShortCard name={jsonData[6].name} logo={jsonData[6].logo} longs={jsonData[6].Longs} shorts={jsonData[6].Shorts}></LongShortCard>
        <BuySellCard></BuySellCard>
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