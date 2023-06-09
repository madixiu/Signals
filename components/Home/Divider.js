import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Divider = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    // backgroundColor:'red',
    paddingVertical:15,
    paddingHorizontal:10
  }
});
export default Divider