import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import imageShow from "@/assets/images/dog.png";

export default function TabTwoScreen() {
  const [message, setMessage] = useState('');
  const handlePress = (buttonName) => {
    if (buttonName === 'Perro') {
      setMessage("Congratulations, that's the right answer!");
    } else {
      setMessage('Try again!');
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.question}>What is this?</Text>
        <Image source={imageShow} style={styles.image}></Image>
        <View style={styles.options}>
          <View style={styles.optionOne}>
            <Button
              title="Carro"
              onPress={() => handlePress('Carro')}
            /> 
          </View>
          <View style={styles.optionOne}>
            <Button
              title="Camiseta"
              onPress={() => handlePress('Camiseta')}
            /> 
          </View>
          <View style={styles.optionOne}>
            <Button
              title="Perro"
              onPress={() => handlePress('Perro')}
            /> 
          </View>
        </View>

        {}
        {message ? <Text style={styles.messageText}>{message}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '40%',
    alignItems: 'center',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '40%',
    borderColor: 'red',
  },
  image: {
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
    textAlign: 'center',
    height: '100%',
    width: '50%',
    padding: 3,
    marginHorizontal: '5%',
    backgroundColor: 'white',
  },
  messageText: {
    marginBottom: 10,
    fontSize: 18,
    color: 'black', // Color of the congratulations message
    fontWeight:'bold',
  },
});



