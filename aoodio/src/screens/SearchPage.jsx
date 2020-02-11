import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import SearchHeader from "../components/SearchHeader";
import SearchSuggestions from "../components/SearchSuggestions";
import styles from "../styles/searchPage";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  setSearchHeader = input => {
    this.setState({
      searchInput: input
    });
  };

  handleNavigate = (to, params) => {
    const { navigation } = this.props;
    navigation.navigate(to, params);
  };

  handleSearch = () => {
    this.handleNavigate("SearchResult", this.state);
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchHeader
          input={this.state.searchInput}
          setText={this.setSearchHeader}
          handleSearch={this.handleSearch}
          goScreen={this.handleNavigate}
        ></SearchHeader>
        <SearchSuggestions
          setText={this.setSearchHeader}
          handleSearch={this.handleSearch}
        ></SearchSuggestions>
      </View>
    );
  }
}
