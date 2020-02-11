import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles/logo";

export default function Logo(props) {
  const { position, logoSize, linkToHome } = props;
  const navigation = useNavigation();

  const customStyle = StyleSheet.create({
    styles: { justifyContent: position, fontSize: logoSize }
  });

  return linkToHome ? (
    <TouchableOpacity
      style={styles.logo}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={[styles.textInfo, customStyle.styles]}>A</Text>
      <Text style={[styles.textDanger, customStyle.styles]}>o</Text>
      <Text style={[styles.textWarning, customStyle.styles]}>o</Text>
      <Text style={[styles.textPrimary, customStyle.styles]}>d</Text>
      <Text style={[styles.textSuccess, customStyle.styles]}>i</Text>
      <Text style={[styles.textDanger, customStyle.styles]}>o</Text>
    </TouchableOpacity>
  ) : (
    <View style={styles.logo}>
      <Text style={[styles.textInfo, customStyle.styles]}>A</Text>
      <Text style={[styles.textDanger, customStyle.styles]}>o</Text>
      <Text style={[styles.textWarning, customStyle.styles]}>o</Text>
      <Text style={[styles.textPrimary, customStyle.styles]}>d</Text>
      <Text style={[styles.textSuccess, customStyle.styles]}>i</Text>
      <Text style={[styles.textDanger, customStyle.styles]}>o</Text>
    </View>
  );
}
