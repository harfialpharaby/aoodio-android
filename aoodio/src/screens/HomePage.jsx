import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Feather } from "@expo/vector-icons";

import Logo from "../components/Logo";
// import SearchBox from "../components/SearchBox";

export default class HomePage extends Component {
  render() {
    const { navigation } = this.props;
    const { width } = Dimensions.get("window");

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 150
      },
      searchInput: {
        flex: 0.1,
        flexDirection: "row-reverse",
        textAlign: "right",
        width: width - 30,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#bdc3c7",
        borderRadius: 50
      },
      searchText: {
        textAlign: "right",
        textAlignVertical: "center",
        // backgroundColor: "#4185F4",
        paddingHorizontal: 15,
        // color: "white",
        fontWeight: "bold",
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
      },
      searchPlaceholder: {
        color: "grey",
        textAlignVertical: "center",
        marginRight: 10
      }
    });

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Logo position="center" logoSize={70}></Logo>
        {/* <SearchBox></SearchBox> */}
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
