import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Home = ({route,navigation}) => {
    const {item} = route.params;
    console.log(route.params)

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        {/* {data == null ? null : <Text style={{color:"#000"}}>{data}</Text>} */}
        {item && <Text style={{color:"#000"}}>{item}</Text>}
      <Button onPress={()=>navigation.navigate("Scanner")} title='Scan'/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})