import React from "react";
import { WebView } from "react-native-webview";

const Home = () => {
  const urlLoad = "http://wmgas.com.br/delivery/silvagas#gas";
  return (
    <WebView
      userAgent="Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3714.0 Mobile Safari/537.36"
      source={{ uri: urlLoad }}
      javaScriptEnabled
    />
  );
};
export default Home;
