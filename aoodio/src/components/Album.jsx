import React from "react";
import { FlatList, View, Text } from "react-native";

// import useFetchAlbum from '../store/actions';

export default function Album(props) {
  // const { isLoading, err, albums } = useFetchArtist(searchInput);
  const dummies = [
    "Coldplay",
    "Avenged Sevenfold",
    "Linkin Park",
    "Jason Mraz",
    "Justin Bieber",
    "Agnes",
    "Shakira",
    "Jennifer Lopez",
    "21 Pilots",
    "Clean Bandit",
    "LMFAO"
  ];

  return (
    <FlatList
      style={{
        width: "100%",
        marginVertical: 5,
        backgroundColor: "lightgrey"
      }}
      data={dummies}
      renderItem={({ item }) => (
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 2,
            borderRadius: 5,
            backgroundColor: "white",
            padding: 25
          }}
        >
          <Text style={{ paddingVertical: 20 }}>{item}</Text>
        </View>
      )}
      keyExtractor={item => item}
    />
  );
}
