import React from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar, Image } from "react-native";

const SecondScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Are you Barking or are you leaving?</Text>
        <Image
          style={{width: 300, height: 200, alignSelf: "center"}}
          source={{uri: 'https://media.giphy.com/media/Xg4mqfGJM5YnCEshiM/giphy.gif'}} />
      </View>
      <StatusBar backgroundColor='black' />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: "center",
    //backgroundColor: "black",
    marginTop: 150
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    marginBottom: 15
  },
});
export default SecondScreen;
