import * as firebase from "firebase";

export const loginRequest = (email, password) => {
  console.log(email, password);
  firebase.auth().signInWithEmailAndPassword(email, password);
};