import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

console.log(__DEV__);

function HomeScreen(props) {
  const {
    navigation: { navigate }
  } = props;

  return (
    <View style={styles.container}>
      <Text>Muskul {{ __DEV__ }}</Text>
      <View style={styles.element}>
        <Button onPress={() => navigate(Screen.Add)} title="Add"></Button>
      </View>
      <View style={styles.element}>
        <Button onPress={() => navigate(Screen.List)} title="List"></Button>
      </View>
    </View>
  );
}

function ListScreen() {
  return (
    <View style={styles.container}>
      <Text>List</Text>
      <View style={styles.element}></View>
    </View>
  );
}

function AddScreen() {
  return (
    <View style={styles.container}>
      <Text>Add</Text>
      <View style={styles.element}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },

  element: {
    margin: 10
  }
});

enum Screen {
  Home = "Home",
  List = "List",
  Add = "Add"
}

const AppNavigator = createStackNavigator({
  [Screen.Home]: {
    screen: HomeScreen
  },
  [Screen.List]: {
    screen: ListScreen
  },
  [Screen.Add]: {
    screen: AddScreen
  }
});

export default createAppContainer(AppNavigator);
