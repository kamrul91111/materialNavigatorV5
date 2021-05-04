import * as React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
  StatusBar
} from "react-native";

import { Audio } from 'expo-av';


//icon
import { FontAwesome5 } from '@expo/vector-icons';
//grid
import { Col, Row, Grid } from "react-native-easy-grid";


const Home = () => {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/bark.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Home Screen Barking</Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={{width: 150, height: 40}}
            onPress={playSound}
          >
            <Grid>
              <Row>
                <Col size={18} style={{padding: 5}}><FontAwesome5 name="dog" size={24} color="white" /></Col>
                <Col size={80} style={{marginLeft: -15}}><Text style={styles.buttonText}>Press Me!</Text></Col>
              </Row>
            </Grid>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar backgroundColor="pink" />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: "center",
    marginTop: 200
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
  button: {
    backgroundColor: 'transparent',
    alignItems: "center",
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    marginTop: 50,
  },
  buttonText: {
    textAlign: "center", 
    marginTop: 5, 
    color: '#008b8b',
    fontSize: 20
  }
});


export default Home;



