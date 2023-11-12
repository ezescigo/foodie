import { firebaseApp } from "../../firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email: string, password: string) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password);
};
