import React, { useEffect, useRef } from "react";
import {
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Dimensions
} from "react-native";
import Constants from "expo-constants";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function SearchHeader(props) {
  const { width } = Dimensions.get("window");
  const { navigation, input } = props;
  const inputRef = useRef("search-input");

  const styles = StyleSheet.create({
    searchView: {
      flexDirection: "row",
      marginTop: Constants.statusBarHeight * 1.5,
      alignSelf: "center",
      width: width - 45,
      borderBottomColor: "lightgrey",
      borderBottomWidth: 2
    },
    searchLogo: { flex: 0.1, alignItems: "center", paddingRight: 15 },
    searchInput: {
      flex: 0.8
    },
    magnifier: {
      flex: 0.1,
      alignItems: "center",
      justifyContent: "center"
    }
  });

  useEffect(() => {
    if (input) {
      inputRef.current.focus();
    }
  }, [input]);

  return (
    <View style={styles.searchView}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        style={styles.searchLogo}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../../assets/A.png")}
          style={{ width: 45, height: 45 }}
        ></Image>
      </TouchableOpacity>
      <TextInput
        ref={inputRef}
        autoFocus={input ? false : true}
        placeholder="Search..."
        value={input || ""}
        style={styles.searchInput}
        onChange={props.handleChange}
        onSubmitEditing={props.handleSearch}
        returnKeyType="search"
      ></TextInput>
      {input ? (
        <TouchableOpacity style={styles.magnifier} onPress={props.handleDelete}>
          <AntDesign name="close" size={20} />
        </TouchableOpacity>
      ) : (
        <View style={styles.magnifier}>
          <Feather name="search" size={20} />
        </View>
      )}
    </View>
  );
}
