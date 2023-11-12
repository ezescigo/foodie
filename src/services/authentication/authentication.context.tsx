import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";
import { firebaseApp } from "../../firebase/config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  initializeAuth,
} from "firebase/auth";
// import {
//   ReactNativeAsyncStorage,
//   getReactNativePersistance,
// } from "@react-native-async-storage/async-storage";

type AuthenticationContextProps = {
  isAuthenticated: boolean;
  user: any;
  isLoading: boolean;
  error: any;
  onLogin: (email: string, password: string) => void;
  onRegister: (
    email: string,
    password: string,
    repeatedPassword: string
  ) => void;
  onLogout: () => void;
};

export const AuthenticationContext =
  createContext<AuthenticationContextProps | null>(null);

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const auth = initializeAuth(firebaseApp);
  // const auth = initializeAuth(firebaseApp, {
  //   persistence: getReactNativePersistance(ReactNativeAsyncStorage),
  // });

  auth.onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  const onRegister = (
    email: string,
    password: string,
    repeatedPassword: string
  ) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match.");
      return;
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    auth.signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
