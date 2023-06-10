import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,RefreshControl} from 'react-native'
import { listingDataOptimizer } from '../components/misc/dataOptimizer'
import ListItem from '../components/List/ListItem';

export default function List() {
  const [CryptoList, setCryptoList] = useState([]);
  const [Refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  
  
  function onRefresh(){
    console.log('refresh called');
    // this.setState({refreshing : true})
    setRefreshing(true);
    getData();
    setTimeout(() => {
      // this.setState({refreshing : false})
      setRefreshing(false);
    }, 2000);
  }

  function getData() {
    axios.get('https://api.alternative.me/v2/ticker/?limit=10').then (response => {
      let data = response.data.data;
      let dataOPed = listingDataOptimizer(data)
      setCryptoList(dataOPed)
      setLoading(false); 
    }).catch((err) => {
      setLoading(false);
      setError(true);
      setCryptoList(null);
    });
  }

  useEffect(() => {
      getData();
  }, []);

  if (loading) 
  return (
  <View style={{alignItems: 'center',flex:1,justifyContent: 'center',}}>
    <Text>Loading...</Text>  
  </View>
  )
  else if (error)
  return(
    <View style={{alignItems: 'center',flex:1,justifyContent: 'center',}}>
    <Text style={{color:'red'}}>Error...</Text>  
  </View>
  )
  else 
  return (
    <View style={{flex:1,backgroundColor:'#999'}}>
        <View style={styles.listHeader}>
          <View style={{flex:1,alignItems: 'flex-start',flexWrap:'wrap',justifyContent:'center'}}>
            <Text style={{fontSize:11,color:'#111'}}>Coin</Text>

          </View>
          <View style={{alignItems:'center',flexWrap:'wrap',justifyContent:'center'}}>
            <Text style={{fontSize:11,color:'#111'}}>Price $</Text>

          </View>
          <View  style={{flex:1,alignItems:'flex-start',flexWrap:'wrap-reverse',justifyContent:'center'}}>
            <Text style={{fontSize:11,color:'#111'}}>Change %</Text>

          </View>

      </View>
        <View style={styles.listView}>
          
          <FlatList
            data={CryptoList}
            renderItem={({ item }) => {
              return   <ListItem name={item.name} symbol={item.symbol} rank={item.rank} price={item.price} change24h={item.percent_change_24h} change1h={item.percent_change_1h} change7d={item.percent_change_7d}/>
            }}
            refreshControl={
              <RefreshControl 
                refreshing={Refreshing}
                // onRefresh={this.onRefresh.bind(this)}
                onRefresh={() => onRefresh()}
              />
            }
    
          />  
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  listView: {
    flex:1,
    marginHorizontal: 5,
    // marginTop: 15,
    // paddingBottom:20,
    // paddingTop: 20,
  },
  listHeader:{
    // flex:1,
    flexDirection:'row',
    // justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    // paddingBottom:1
  }
 
});