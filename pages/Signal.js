import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import {itemDataOptimizer} from '../components/misc/dataOptimizer'
import {percent_text_color,chip_color} from '../components/misc/dynamicStyles.js'
import { absNumber } from '../components/misc/numberOptimizer'
import data from '../assets/mockBTCdata.json'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Signal(props) {
  data = itemDataOptimizer(data)
  return (
    <View style={{backgroundColor:"#999", flex:1}}>

        {/*// Price Card */}
      <View style={styles.container}>
        <View style={styles.PriceViewStyle}>
          <Text style={styles.priceTextStyle}>$26,032</Text>
          <Text style={styles.lastUpdateTextStyle}>Last Update</Text>
        </View>

        <View style={styles.ChangeViewStyle}>

          <View style={styles.ChangeSubViewStyle}>
          
            <View style={[styles.priceChip,chip_color(data.percent_change_1h)]}>
              {/* <Ionicons name="md-caret-down-outline" size={9} color="black" /> */}
              <Text style={[styles.changeChipText]} >{absNumber(data.percent_change_1h)}%</Text>

            </View>
            <View style={{justifyContent: 'center',}}>

              <Text style={[styles.changeTextStyling,{marginLeft:5}]}>1H</Text>
            </View>
          </View>

          <View style={styles.ChangeSubViewStyle}>
            <View style={[styles.priceChip,chip_color(data.percent_change_24h)]}>
              <Text style={[styles.changeChipText]} >{absNumber(data.percent_change_24h)}%</Text>
            </View>
            <View style={{justifyContent: 'center',}}>

            <Text style={[styles.changeTextStyling,{marginLeft:5}]}>1D</Text>
            </View>
          </View>

          <View style={styles.ChangeSubViewStyle}>
            <View style={[styles.priceChip,chip_color(data.percent_change_7d)]}>
            <Text style={[styles.changeChipText]} >{absNumber(data.percent_change_7d)}%</Text>

            </View>
            <View style={{justifyContent: 'center',}}>

              <Text style={[styles.changeTextStyling,{marginLeft:5}]}>7D</Text>
            </View>
          </View>

        </View>
        
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Market Cap</Text>
          <Text style={styles.infoValue}>$1,234,567,890</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Volume</Text>
          <Text style={styles.infoValue}>$1,000,000</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Circulating Supply</Text>
          <Text style={styles.infoValue}>$1,000,000</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Max Supply</Text>
          <Text style={styles.infoValue}>$1,000,000</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Total Supply</Text>
          <Text style={styles.infoValue}>$1,000,000</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#c8c8c8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical:10,
    borderRadius:5,
  },
  PriceViewStyle: {
    justifyContent: 'center',
    paddingLeft: 20
  },
  ChangeViewStyle:{
    justifyContent: 'flex-end',
    // paddingTop: 15,
    // paddingBottom: 15,   
    paddingVertical:3, 
    paddingRight: 20

  },
  ChangeSubViewStyle: {
    // flex:1,
    // paddingVertical:5,

    flexDirection:'row',
    justifyContent: 'center',

  },
  changeTextStyling: {
    fontSize: 9,
    color:'#242424'
    
    // paddingRight: 22,
  },
  changeChipText: {
    fontSize: 9,
    color: 'white'
  },
  priceTextStyle:{
    fontSize:20,
    fontWeight:'800',
  },
  lastUpdateTextStyle: {
    color:'#4c4c4c',
    fontSize:11,
  },
  priceChip:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    // backgroundColor:'gray',
    paddingHorizontal:2,
    paddingVertical:5,
    marginVertical:2,
    borderRadius:5,
    alignItems: 'center',
  },

  //Info CARD
  infoCard: {
    backgroundColor:'#c8c8c8',
    marginHorizontal: 10,
    marginVertical:10,
    borderRadius:5,
    paddingVertical: 5

  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginVertical: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 14,
    marginVertical: 5,
    // marginBottom: 10,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
