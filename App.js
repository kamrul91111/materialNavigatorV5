import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
//screens
import Home from "./Screens/Home";
import SecondScreen from "./Screens/SecondScreen";
import Bed from './Screens/Bed';





const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Nice"
        //activeColor="purple"
        barStyle={{ backgroundColor: "black" }}
        shifting={true}
      >
        <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={{
            tabBarLabel: "Barking",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="abjad-arabic" color='red' size={26} />
            ),
            
          }}
        />
        <Tab.Screen
          name="Nice"
          component={SecondScreen}
          options={{
            tabBarLabel: "?",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="dog" color='green' size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Leave"
          component={Bed}
          options={{
            tabBarLabel: "Leaving",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="material-design" color='yellow' size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
