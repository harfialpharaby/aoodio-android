import React, { Component } from "react";
import { View, Alert } from "react-native";
import { connect } from "react-redux";

import { NULLIFY } from "../store/actionTypes";
import SearchHeader from "../components/SearchHeader";
import SearchSuggestions from "../components/SearchSuggestions";
import styles from "../styles/searchPage";

class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchInput: ""
  //   };
  // }

  setSearchHeader = input => {
    this.setState({
      searchInput: input
    });
  };

  handleNavigate = (to, params) => {
    // const { navigation } = this.props;
    // navigation.navigate(to, params);
    if (to === "Home") {
      this.props.dispatch({ type: NULLIFY });
    }
    this.props.navigation.navigate(to);
  };

  handleSearch = () => {
    // this.handleNavigate("SearchResult", this.state);
    this.handleNavigate("SearchResult");
  };

  render() {
    if (this.props.route.params) {
      const alertMsg = this.props.route.params.alert;
      Alert.alert("Alert", alertMsg);
    }

    return (
      <View style={styles.container}>
        {/* {this.props.route.params ? Alert.alert("Alert", alertMsg) : null} */}
        <SearchHeader
          // input={this.state.searchInput}
          // setText={this.setSearchHeader}
          handleSearch={this.handleSearch}
          goScreen={this.handleNavigate}
        ></SearchHeader>
        <SearchSuggestions
          // setText={this.setSearchHeader}
          handleSearch={this.handleSearch}
        ></SearchSuggestions>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state.search;
};

export default connect(mapStateToProps)(Search);
