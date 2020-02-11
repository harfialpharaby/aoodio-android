import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  searchView: {
    flexDirection: "row",
    alignSelf: "center",
    width: Dimensions.get("window").width - 45,
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
