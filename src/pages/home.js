import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import { WebView } from "react-native-webview";

const Home = () => {
  const urlLoad = "http://wmgas.com.br/delivery/silvagas#gas";
  const Loading = () => {
    return <ActivityIndicator></ActivityIndicator>;
  };
  return (
    <WebView
      userAgent="Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3714.0 Mobile Safari/537.36"
      source={{ uri: urlLoad }}
      javaScriptEnabled
      startInLoadingState={true}
      renderLoading={() => <Loading />}
    />
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34af23",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
