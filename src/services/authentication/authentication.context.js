import React, { useState, createContext } from 'react';
import * as firebase from "firebase";
import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ user, setUser ] = useState(null);
  const [ error, setError ] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    console.log('starting', email, password);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setUser(userCredential);
        setIsLoading(false);
      }).catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={ {
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
      } }>
      {children }
    </AuthenticationContext.Provider>
  )
};