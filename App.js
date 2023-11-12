import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import firebase from "firebase/compat/app";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/index";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyARz4_Vbt3YvI-qB1VNgyT4F11vGBdhrqE",
  authDomain: "foodie-4da8b.firebaseapp.com",
  projectId: "foodie-4da8b",
  storageBucket: "foodie-4da8b.appspot.com",
  messagingSenderId: "290801636854",
  appId: "1:290801636854:web:763889095853ca7f1563d7",
};

console.log("hi");
console.log(firebase);
// if (!firebase.apps.length) {
export const firebaseApp = initializeApp(firebaseConfig);

console.log(firebaseApp);

console.log("firebase connected");

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
