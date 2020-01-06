import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

import authenticationService from "./authentication.service";
import { Screen } from "../navigation/navigation";

const style = StyleSheet.create({
  container: { marginVertical: 40, marginHorizontal: 20 }
});

export default function LogInScreen(props) {
  const {
    navigation: { navigate }
  } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={style.container}>
      <Text>Login</Text>
      <TextInput
        placeholder="email"
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <TextInput
        placeholder="password"
        onChangeText={password => setPassword(password)}
        value={password}
        secureTextEntry={true}
      />
      <Button
        title="Log in"
        onPress={() =>
          authenticationService
            .logIn(email, password)
            .then(result => {
              console.log(result);
              () => navigate(Screen.Home);
            })
            .catch(error => console.log(error))
        }
      ></Button>
    </View>
  );
}
