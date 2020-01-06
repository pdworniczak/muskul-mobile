import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import { Screen } from "./navigation";

function HomeScreen(props) {
  const {
    navigation: { navigate }
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.element}>
        <Button onPress={() => navigate(Screen.Add)} title="Add"></Button>
      </View>
      <View style={styles.element}>
        <Button onPress={() => navigate(Screen.List)} title="List"></Button>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "MUSKUŁ",
  headerRight: () => (
    <Button
      onPress={() => {
        navigation.navigate(Screen.LogIn);
      }}
      title="Log out"
    />
  )
});

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

export default createStackNavigator(
  {
    [Screen.Home]: {
      screen: HomeScreen
    },
    [Screen.List]: {
      screen: ListScreen
    },
    [Screen.Add]: {
      screen: AddScreen
    }
  },
  {
    initialRouteName: Screen.Home
  }
);
