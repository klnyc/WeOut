import { firebaseAuth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const logIn = async (screenName, password) => {
  const response = await signInWithEmailAndPassword(
    firebaseAuth,
    screenName,
    password
  );
  return response;
};
