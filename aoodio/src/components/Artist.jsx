import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Keyboard,
  ScrollView,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import useFetchArtist from "../hooks/useFetchArtist";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import styles from "../styles/artist";

export default function Artist(props) {
  const [searchInput, setSearchInput] = useState(props.route.params);
  const [loadImage, setLoadImage] = useState(true);
  const { isLoading, err, artists } = useFetchArtist(searchInput);
  const navigation = useNavigation();

  const handleSearch = input => {
    const { text } = input.nativeEvent;
    setSearchInput({ searchInput: text });
  };

  const imageSelector = () => {
    if (artists[0].thumbnail) {
      return artists[0].thumbnail;
    } else if (artists[0].clearArt) {
      return artists[0].clearArt;
    } else if (artists[0].logo) {
      return artists[0].logo;
    } else {
      return "";
    }
  };

  const handleNotFound = async () => {
    let tempInput = searchInput.searchInput;
    await setSearchInput("");
    return navigation.navigate("Search", {
      alert: `Artist ${tempInput}, try input artist fullname or find different artist`
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Logo position="flex-end" logoSize={25} linkToHome={true}></Logo>
        <SearchBox input={searchInput} handleSearch={handleSearch}></SearchBox>
        {isLoading ? (
          <View style={styles.background}>
            <View style={[styles.foreground, styles.shadow, styles.mid]}>
              <Image
                source={require("../../assets/Magnify-1s-200px.gif")}
                style={styles.loadingMagnifier}
              />
              <Text>Searching Data...</Text>
            </View>
          </View>
        ) : typeof artists[0] === "string" || err ? (
          <View style={styles.background}>
            <View style={[styles.foreground, styles.shadow, styles.mid]}>
              <Image
                source={require("../../assets/1400397-200.png")}
                style={styles.notFoundMagnifier}
                resizeMode="contain"
              ></Image>
              <Text style={{ textTransform: "capitalize" }}>
                No data found for artist{" "}
                <Text
                  style={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  {searchInput.searchInput}
                </Text>
              </Text>
              <Text style={{ textTransform: "capitalize" }}>
                Try input artist fullname or find different artist
              </Text>
            </View>
          </View>
        ) : artists[0] ? (
          <ScrollView style={styles.background}>
            <View style={[styles.foreground, styles.shadow, styles.itemCenter]}>
              <Image
                source={{ uri: imageSelector() }}
                loadingIndicatorSource={require("../../assets/Ripple-1s-200px.gif")}
                onLoadStart={() => setLoadImage(true)}
                onLoadEnd={() => setLoadImage(false)}
                style={styles.coverImage}
                resizeMode="contain"
              ></Image>
              {loadImage ? (
                <View
                  style={[
                    styles.coverImage,
                    { justifyContent: "center", alignItems: "center" }
                  ]}
                >
                  <Image
                    source={require("../../assets/Ripple-1s-200px.gif")}
                    style={{
                      height: 100
                    }}
                    resizeMode="contain"
                  />
                </View>
              ) : null}
              <Text style={styles.artistName}>
                {artists[0].artistName || "Uknown"}
              </Text>
              <Text style={styles.biographyTitle}>Biography:</Text>
              <Text style={styles.biographyBody}>
                {artists[0].biography || "Uknown"}
              </Text>
              <View style={styles.footerContainer}>
                <View style={styles.footerCard}>
                  <Text style={styles.footerTitle}>Label</Text>
                  <Text style={[styles.shadow, styles.footerBody]}>
                    {artists[0].label || "Uknown"}
                  </Text>
                </View>
                <View style={styles.footerCard}>
                  <Text style={styles.footerTitle}>Website</Text>
                  <Text style={[styles.shadow, styles.footerBody]}>
                    {artists[0].website || "Uknown"}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        ) : (
          <Text>Still Loading...</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
