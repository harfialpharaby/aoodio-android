import React, { Component } from "react";
import { View, StatusBar } from "react-native";

import Logo from "../components/Logo";
import SearchBox from "../components/SearchBox";

export default class AlbumList extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <Logo position="flex-end" logoSize={25}></Logo>
        <SearchBox></SearchBox>
      </View>
    );
  }
}
