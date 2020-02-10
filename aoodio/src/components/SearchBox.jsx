import React, { useState } from "react";
import { StyleSheet, ScrollView, TextInput, Dimensions } from "react-native";

export default function SearcBox(props) {
  const [searchInput, setSearchInput] = useState("");
  const { width } = Dimensions.get("window");

  const styles = StyleSheet.create({
    searchBox: {
      height: 40,
      width: width - 30,
      borderColor: "#bdc3c7",
      borderWidth: 1,
      borderRadius: 50
    }
  });

  const handleChangeText = text => {
    setSearchInput(text);
  };

  return (
    <ScrollView>
      <TextInput
        style={styles.searchBox}
        onChangeText={handleChangeText}
        value={searchInput}
        // placeholder="Search album here"
        // inlineImageLeft="search_icon"
      />
    </ScrollView>
  );
}
