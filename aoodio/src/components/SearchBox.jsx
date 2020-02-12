import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles/searchBox";

export default function SearcBox() {
  const { input } = useSelector(state => state.search);
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Search")}>
      <View style={styles.container}>
        <View style={styles.sideIcon}>
          <Feather name="search" size={20} />
        </View>
        <Text style={styles.textInput}>{input}</Text>
      </View>
    </TouchableOpacity>
  );
}
