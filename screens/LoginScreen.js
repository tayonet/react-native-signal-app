import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { TextBase } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  });
  const signIn = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/signal.png")}
        style={{
          width: 100,
          height: 100,
          marginTop: 15,
          marginLeft: 10,
          borderRadius: 20,
        }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFucus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button title="Login" onPress={signIn} containerStyle={styles.button} />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.button}
        type="outline"
      />
      <View style={{ height: 80 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    width: 300,
    marginTop: 10,
  },
  inputContainer: {
    width: 300,
  },
});
