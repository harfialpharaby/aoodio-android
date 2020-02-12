import React, { useState, useEffect } from "react";
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

import useFetchTracks from "../hooks/useFetchTracks";

export default function TrackList(props) {
  const { album } = props;
  const { isLoading, err, tracks } = useFetchTracks(album.id);
  const [playId, setPlayId] = useState("");

  //   if (tracks.length && tracks[0].hasOwnProperty("id")) {
  //     console.log(Object.keys(tracks[0]));
  //   }

  useEffect(() => {
    setPlayId("");
  }, [tracks]);

  return isLoading ? (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : typeof tracks[0] === "string" ? (
    <View>
      <Text>No Tracks Found For This Album</Text>
    </View>
  ) : tracks ? (
    <FlatList
      style={{
        flex: 1,
        marginVertical: 10
      }}
      showsHorizontalScrollIndicator={false}
      data={tracks}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            margin: 10,
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{ flex: 0.9, height: 30, flexDirection: "row" }}
            onPress={() => setPlayId(item.id)}
          >
            <View
              style={{
                flex: 0.1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {playId && playId == item.id ? (
                <Feather name="pause-circle" size={25} color="red" />
              ) : (
                <Feather name="play-circle" size={25} />
              )}
            </View>
            <View style={{ flex: 0.9, paddingLeft: 10 }}>
              <View>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  {item.trackName}
                </Text>
                <Text style={{ color: "grey" }}>{item.artistName}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.1,
              height: 30,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View>
              <Entypo name="dots-three-vertical" size={15} />
            </View>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  ) : (
    <Text>Still Loading...</Text>
  );
}
