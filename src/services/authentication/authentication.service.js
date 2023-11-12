import { firebaseApp } from "./authentication.context";

const auth = firebaseApp.auth();
export const loginRequest = (email, password) => {
  console.log(email, password);
  auth.signInWithEmailAndPassword(email, password);
};
