import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Muskul</Text>
      <View style={styles.element}>
        <Button
          onPress={() => console.log("add")}
          title="add training"
        ></Button>
      </View>
      <View style={styles.element}>
        <Button
          onPress={() => console.log("list")}
          title="list"
        ></Button>
      </View>
      <View style={styles.element}>
        <Button onPress={() => console.log("logout")} title="logout"></Button>
      </View>
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
