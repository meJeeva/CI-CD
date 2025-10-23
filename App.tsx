import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{
      backgroundColor : '#3A4959',
      flex:1,
      alignItems:"center",
      justifyContent:'center'
    }}>
      <Text style={{
        color : 'white',
        fontSize : 20,
        fontStyle:'italic'
      }}>PRACTICE CI/CD PIPELINES</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})