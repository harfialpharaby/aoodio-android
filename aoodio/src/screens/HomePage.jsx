import React, { Component } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";

import Logo from "../components/Logo";
import styles from "../styles/homepage";

export default class HomePage extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Logo position="center" logoSize={70}></Logo>
        <TouchableOpacity
          style={styles.searchInput}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.searchText}>
            <Feather name="search" size={25}></Feather>
          </Text>
          <Text style={styles.searchPlaceholder}>Search...</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
