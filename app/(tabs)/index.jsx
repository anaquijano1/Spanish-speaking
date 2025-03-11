import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import handImage from "@/assets/images/hand.png"

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Bienvendio al mundo hsipano hablante!</Text>
      <Image source= {handImage} style={styles.image}></Image>
      <Text style={styles.text}> Welcome to the spanish speaking world!</Text>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f8f8f8',
  },
  image:{
    resizeMode: 'contain',
    justifyContent: 'center',
    height: '400px',
    width: '300px',
    alignItems:'center',
  },
  text: {
    color: 'black',
    fontSize: 35,
    textAlign: 'center',
    fontWeight:'heavy',
    fontStyle:'italic',
    letterSpacing:-1,
    padding:'5px',
  }
})
