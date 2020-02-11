import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 45,
    height: 40,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "lightgrey",
    backgroundColor: "white"
  },
  sideIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3
  },
  textInput: { flex: 9, padding: 10 }
});
