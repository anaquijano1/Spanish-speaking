import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import image1 from "@/assets/images/dog.png";
import image2 from "@/assets/images/carro.png";
import image3 from "@/assets/images/sombrilla.png";
import image4 from "@/assets/images/jugo.png";






export default function TabTwoScreen() {
  const images =[image1,image2, image3,image4];
  const answers = ['Perro', 'Carro', 'Sombrilla','Jugó']
  const answerChoices=[['Perro', 'Carro', 'Camiseta'],
                       ['Carro', 'Tigre', 'Sombra'],
                       ['Termo', 'Bomba', 'Sombrilla'],
                       ['Perro', 'Camion', 'Jugó']]
  const [message, setMessage] = useState('  ');
  const [imageIndex, setImageIndex] = useState(0);
  let button1=answerChoices[imageIndex][0];
  let button2=answerChoices[imageIndex][1];
  let button3=answerChoices[imageIndex][2];

  const handlePress = (buttonName) => {
    if (buttonName === answers[imageIndex]) {
      setMessage("Congratulations, that's the right answer!");
      setTimeout(() => {
        const nextIndex = (imageIndex + 1) % images.length;
        setImageIndex(nextIndex); 
        setMessage("    "); 
      }, 2000);
      
    } else {
      setMessage('Try again!');
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.question}>What is this?</Text>
        <Image source={images[imageIndex]} style={styles.image}></Image>
        <View style={styles.options}>
          <View style={styles.optionOne}>
            <Button
              title={button1}
              onPress={() => handlePress(answerChoices[imageIndex][0])}
            /> 
          </View>
          <View style={styles.optionOne}>
            <Button
              title={button2}
              onPress={() => handlePress(answerChoices[imageIndex][1])}
            /> 
          </View>
          <View style={styles.optionOne}>
            <Button
              title={button3}
              onPress={() => handlePress(answerChoices[imageIndex][2])}
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
    marginTop: '20%',
    alignItems: 'center',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '20%',
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
    marginBottom: '20%',
    fontSize: 18,
    color: 'black', // Color of the congratulations message
    fontWeight:'bold',
  },
});



