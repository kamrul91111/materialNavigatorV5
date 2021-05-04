import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Bed = () => {
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Hello</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: "center",
    backgroundColor: "black",
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
});

export default Bed;
