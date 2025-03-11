import { View, Text, StyleSheet, Image, Button} from 'react-native'
import React from 'react'
import imageShow from "@/assets/images/mm.png"


export default function TabTwoScreen() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.question}>What is this?</Text>
        <Image source= {imageShow} style={styles.image}></Image>
        <View style={styles.options}>
          <View style={styles.optionOne}>
            <Button style={styles.options}>Option 1</Button>
          </View>
          <View style={styles.optionOne}>
            <Text style={styles.text}>Option 2</Text>
          </View>

          <View style={styles.optionOne}>
            <Text style={styles.text}>Option 3</Text>
          </View>

        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor:'#FFFFFF',
  },
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
    marginTop: '40%',
    alignItems: 'center',
  },
  options:{
    flexDirection: 'row',
    justifyContent:'center',
    marginBottom: '40%',
    borderColor:'red',
  },
  image:{
    height: '20%',
    width: '80%',
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  text: {
    color: '#576060',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: '10%',
  },
  question: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#031012',
  },
  optionOne: {
    borderColor:'red',
    borderWidth:2,
    textAlign: 'center',
    height:'100%',
    width:'60%',
    padding:3,
    marginHorizontal: '10%',
    backgroundColor:'white',
  }
});
