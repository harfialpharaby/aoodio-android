import React, { useState, useEffect, useRef } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

import styles from "../styles/searchBox";

export default function SearcBox(props) {
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef("search-input");

  const handleChangeText = text => {
    setSearchInput(text);
  };

  useEffect(() => {
    setSearchInput(props.input.searchInput);

    return () => {
      setSearchInput("");
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.sideIcon}>
        <Feather name="search" size={20} />
      </View>
      <TextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        style={styles.textInput}
        onChangeText={handleChangeText}
        onSubmitEditing={searchInput => props.handleSearch(searchInput)}
        value={searchInput}
        returnKeyType="search"
      />
      {searchInput ? (
        <TouchableOpacity
          style={styles.sideIcon}
          onPress={() => {
            inputRef.current.focus();
            setSearchInput("");
          }}
        >
          <AntDesign name="close" size={18} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
