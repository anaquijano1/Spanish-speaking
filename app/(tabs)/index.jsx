import { View, Text, StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import icedCofeeImg from "@/assets/images/iced.png"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
       source={icedCofeeImg}
       resizeMode='cover'
       style={styles.image}
      >
      <Text style={styles.text}> Welcome to the spanish speaking world! </Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container:{
    flex: 1,
  flexDirection: 'column',
  },
  image:{
    width:'100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
})
