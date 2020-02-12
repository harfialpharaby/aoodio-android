import React, { useEffect, useRef } from "react";
import { View, TouchableOpacity, Image, TextInput } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { SEARCH, NULLIFY } from "../store/actionTypes";
import styles from "../styles/searchHeader";

export default function SearchHeader(props) {
  const { input } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const inputRef = useRef("search-input");

  useEffect(() => {
    if (input) {
      inputRef.current.focus();
    }
  }, [input]);

  return (
    <View style={styles.searchView}>
      <TouchableOpacity
        style={styles.searchLogo}
        onPress={() => props.goScreen("Home")}
      >
        <Image
          source={require("../../assets/A.png")}
          style={{ width: 45, height: 45 }}
        ></Image>
      </TouchableOpacity>
      <TextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        autoFocus={input ? false : true}
        placeholder="Search..."
        value={input || ""}
        style={styles.searchInput}
        onChange={e => dispatch({ type: SEARCH, input: e.nativeEvent.text })}
        onSubmitEditing={props.handleSearch}
        returnKeyType="search"
      ></TextInput>
      {input ? (
        <TouchableOpacity
          style={styles.magnifier}
          onPress={() => dispatch({ type: NULLIFY })}
        >
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
