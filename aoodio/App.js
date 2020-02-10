import React from "react";
import { StyleSheet, View, Text, StatusBar, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./src/screens/HomePage";
import SearchPage from "./src/screens/SearchPage";
import AlbumList from "./src/screens/AlbumList";

const Stack = createStackNavigator();

function Detail(props) {
  return (
    <View style={styles.container}>
      <AlbumList></AlbumList>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
        <Stack.Screen name="Search" component={SearchPage}></Stack.Screen>
        <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
