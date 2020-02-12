import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  loadingBg: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "white",
    width: "100%",
    height: "100%"
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: "black",
    width,
    height
  }
});
