import { firebaseApp } from "../../firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(email, password);
};
