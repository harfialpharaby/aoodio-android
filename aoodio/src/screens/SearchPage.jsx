import React, { Component } from "react";
import { View } from "react-native";

import SearchHeader from "../components/SearchHeader";
import SearchSuggestions from "../components/SearchSuggestions";

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

  handleChange = e => {
    e.preventDefault();
    this.setSearchHeader(e.nativeEvent.text);
  };

  handleDelete = () => {
    this.setState({
      searchInput: ""
    });
  };

  handleSearch = () => {
    alert(this.state.searchInput);
  };

  render() {
    return (
      <View>
        <SearchHeader
          {...this.props}
          input={this.state.searchInput}
          handleDelete={this.handleDelete}
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
        ></SearchHeader>
        <SearchSuggestions
          {...this.props}
          setText={this.setSearchHeader}
        ></SearchSuggestions>
      </View>
    );
  }
}
