import React, { useState, useEffect, useRef } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { SEARCH, NULLIFY } from "../store/actionTypes";
import styles from "../styles/searchBox";

export default function SearcBox(props) {
  const { input } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState(input);
  const inputRef = useRef("search-input");

  const handleChangeText = input => {
    // setSearchInput(input);
    dispatch({
      type: SEARCH,
      input
    });
  };

  const handleNullify = () => {
    dispatch({
      type: NULLIFY
    });
    inputRef.current.focus();
  };

  // useEffect(() => {
  //   setSearchInput(input);

  //   return () => {
  //     setSearchInput("");
  //   };
  // }, []);

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
        // onSubmitEditing={searchInput => props.handleSearch(searchInput)}
        onSubmitEditing={props.handleSearch}
        value={input}
        returnKeyType="search"
      />
      {input ? (
        <TouchableOpacity
          style={styles.sideIcon}
          // onPress={handleNullify}
          onPress={() => {
            setSearchInput("");
            inputRef.current.focus();
          }}
        >
          <AntDesign name="close" size={18} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
