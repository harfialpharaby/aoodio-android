import React, { Component } from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather
} from "@expo/vector-icons";

import ArtistScreen from "../components/Artist";
import AlbumScreen from "../components/Album";

export default class SearchResult extends Component {
  render() {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        initialRouteName="Artist"
        barStyle={{ backgroundColor: "#DC3E45" }}
      >
        <Tab.Screen
          name="Music Video"
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="youtube" size={32} color={color} />
            )
          }}
        >
          {() => {
            return <Text>Music Video</Text>;
          }}
        </Tab.Screen>
        <Tab.Screen
          name="Artist"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="artist" size={32} color={color} />
            )
          }}
          component={ArtistScreen}
        />
        <Tab.Screen
          name="Album"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="album" size={32} color={color} />
            )
          }}
          component={AlbumScreen}
        />
      </Tab.Navigator>
    );
  }
}
