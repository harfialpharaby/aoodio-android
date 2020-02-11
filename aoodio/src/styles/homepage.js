import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 150
  },
  searchInput: {
    flex: 0.1,
    flexDirection: "row-reverse",
    textAlign: "right",
    width: Dimensions.get("window").width - 30,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bdc3c7",
    borderRadius: 50
  },
  searchText: {
    textAlign: "right",
    textAlignVertical: "center",
    paddingHorizontal: 15,
    fontWeight: "bold",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
  },
  searchPlaceholder: {
    color: "grey",
    textAlignVertical: "center",
    marginRight: 10
  }
});
