import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import artistStyles from "../styles/artist";
import albumStyles from "../styles/album";
import useFetchAlbum from "../hooks/useFetchAlbum";
import TrackList from "./TrackList";

export default function Album() {
  const { input } = useSelector(state => state.search);
  const { isLoading, err, albums } = useFetchAlbum(input);
  const [selected, setSelected] = useState({});
  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    setSelected(albums[0] || {});
    return () => {
      setSelected({});
    };
  }, [albums]);

  return isLoading ? (
    <View style={[albumStyles.loadingBg, artistStyles.mid]}>
      <Image
        source={require("../../assets/Pulse-1s-200px.gif")}
        style={artistStyles.loadingMagnifier}
      />
      <Text>Fetching Album Data...</Text>
    </View>
  ) : typeof albums[0] === "string" ? (
    <View style={artistStyles.background}>
      <View
        style={[artistStyles.foreground, artistStyles.shadow, artistStyles.mid]}
      >
        <Image
          source={require("../../assets/1400397-200.png")}
          style={artistStyles.notFoundMagnifier}
          resizeMode="contain"
        ></Image>
        <Text style={{ textTransform: "capitalize" }}>
          No data found for artist{" "}
          <Text style={{ fontWeight: "bold", textTransform: "uppercase" }}>
            {input}
          </Text>
        </Text>
        <Text style={{ textTransform: "capitalize" }}>
          Try input artist fullname or find different artist
        </Text>
      </View>
    </View>
  ) : err ? (
    <View style={artistStyles.background}>
      <View
        style={[artistStyles.foreground, artistStyles.shadow, artistStyles.mid]}
      >
        <View style={artistStyles.notFoundMagnifier}>
          <AntDesign name="exclamationcircleo" size={50} />
        </View>
        <Text style={{ textTransform: "capitalize" }}>
          Something went wrong with the server
        </Text>
        <Text style={{ textTransform: "capitalize" }}>
          Please try again later
        </Text>
        <Text>{JSON.stringify(err)}</Text>
      </View>
    </View>
  ) : albums.length ? (
    <View style={{ flex: 3 }}>
      <FlatList
        style={{
          flex: 1
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={albums}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelected(item)}>
            <View
              style={{
                flex: 1,
                marginHorizontal: 10,
                marginTop: 20,
                width: width / 2.5
              }}
            >
              <View style={{ flex: 0.8 }}>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={{ height: "100%" }}
                />
              </View>
              <View style={{ flex: 0.2 }}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: "bold"
                  }}
                >
                  {item.albumName}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <View
        style={{
          flex: 2,
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#4185F4",
          borderBottomWidth: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30
        }}
      >
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            letterSpacing: 2,
            marginTop: 10,
            marginHorizontal: 20,
            fontWeight: "bold",
            color: "black"
          }}
        >
          {selected.albumName}
        </Text>
        <Text style={{ textAlign: "center", color: "black" }}>
          by {selected.artistName}
        </Text>
        <TrackList album={selected}></TrackList>
      </View>
    </View>
  ) : (
    <Text>Still Loading...</Text>
  );
}
