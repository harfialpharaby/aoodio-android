import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightgrey",
    width: "100%",
    alignItems: "center",
    backgroundColor: "white"
  },
  background: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "100%"
  },
  foreground: {
    flex: 1,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  mid: {
    justifyContent: "center",
    alignItems: "center"
  },
  itemCenter: {
    alignItems: "center"
  },
  coverImage: {
    flex: 1,
    width: 330,
    height: 330,
    alignSelf: "center",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  footerContainer: {
    flex: 2,
    flexDirection: "row",
    height: 100,
    width: "135%",
    marginTop: 10
  },
  footerCard: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgrey",
    marginHorizontal: 18,
    borderRadius: 5
  },
  footerTitle: {
    margin: 10,
    fontWeight: "bold",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  footerBody: {
    fontSize: 20,
    height: "40%",
    textAlign: "center",
    alignSelf: "center",
    textAlignVertical: "bottom"
  },
  loadingMagnifier: { width: 50, height: 50, marginBottom: 20 },
  artistName: {
    fontSize: 50,
    textAlign: "center"
  },
  biographyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 50,
    alignSelf: "flex-start"
  },
  biographyBody: { lineHeight: 23 },
  notFoundMagnifier: { height: 50, marginBottom: 10 }
});
