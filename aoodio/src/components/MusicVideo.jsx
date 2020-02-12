import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  Platform
} from "react-native";
import { useSelector } from "react-redux";
import { WebView } from "react-native-webview";

import useFetchVideos from "../hooks/useFetchVideos";
import artistStyles from "../styles/artist";
import albumStyles from "../styles/album";

export default function MusicVideo() {
  const { artists } = useSelector(state => state.artist);
  const { isLoading, data } = useFetchVideos(artists[0]);

  const styles = StyleSheet.create({
    WebViewContainer: {
      marginTop: Platform.OS == "ios" ? 20 : 0
    }
  });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {isLoading ? (
        <View style={[albumStyles.loadingBg, artistStyles.mid]}>
          <Image
            source={require("../../assets/Pulse-1s-200px.gif")}
            style={artistStyles.loadingMagnifier}
          />
          <Text>Fetching Music Videos...</Text>
        </View>
      ) : typeof data[0] === "string" ? (
        <Text>Data Not Found</Text>
      ) : data.length ? (
        <FlatList
          style={{ flex: 1, marginVertical: 10, backgroundColor: "white" }}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                height: 200,
                marginBottom: 10
              }}
            >
              <View style={{ flex: 0.8, backgroundColor: "green" }}>
                <WebView
                  style={[styles.WebViewContainer, { height: "100%" }]}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{ uri: item.video }}
                />
              </View>
              <View
                style={{
                  flex: 0.2,
                  width: "90%",
                  alignSelf: "center"
                }}
              >
                <Text style={{ fontSize: 25 }}>{item.trackName}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>Still Loading...</Text>
      )}
    </View>
  );
}
