import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Logo(props) {
  const { position, logoSize } = props;

  const styles = StyleSheet.create({
    logo: {
      flexDirection: "row",
      justifyContent: position,
      marginBottom: 10
    },
    textInfo: {
      fontSize: logoSize,
      color: "#25A2B8"
    },
    textDanger: {
      fontSize: logoSize,
      color: "#EA4335"
    },
    textWarning: {
      fontSize: logoSize,
      color: "#FEC12A"
    },
    textPrimary: {
      fontSize: logoSize,
      color: "#4185F4"
    },
    textSuccess: {
      fontSize: logoSize,
      color: "#46A853"
    }
  });

  return (
    <View style={styles.logo}>
      <Text style={styles.textInfo}>A</Text>
      <Text style={styles.textDanger}>o</Text>
      <Text style={styles.textWarning}>o</Text>
      <Text style={styles.textPrimary}>d</Text>
      <Text style={styles.textSuccess}>i</Text>
      <Text style={styles.textDanger}>o</Text>
    </View>
  );
}
