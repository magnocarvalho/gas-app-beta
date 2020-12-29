import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/start.router";
import Home from "./src/pages/home";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
