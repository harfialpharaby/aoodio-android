import React from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import { Provider } from "react-redux";

import store from "./src/store";
import HomePage from "./src/screens/HomePage";
import SearchPage from "./src/screens/SearchPage";
import SearchResult from "./src/screens/SearchResult";

const Stack = createStackNavigator();

// function Detail(props) {
//   console.log(props);

//   return (
//     <View style={styles.container}>
//       <SearchResult></SearchResult>
//     </View>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <View style={{ marginTop: Constants.statusBarHeight }} />
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
          <Stack.Screen name="Search" component={SearchPage}></Stack.Screen>
          <Stack.Screen
            name="SearchResult"
            component={SearchResult}
          ></Stack.Screen>
          {/* <Stack.Screen name="Detail" component={Detail}></Stack.Screen> */}
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
