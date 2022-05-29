import { firebaseAuth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const logIn = async (screenName, password) => {
  const email = screenName + "@weout.web.app";
  try {
    const response = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return response.user;
  } catch (error) {
    console.error(error);
  }
};

export const signUp = async (screenName, password) => {
  const email = screenName + "@weout.web.app";
  try {
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
    await updateProfile(firebaseAuth.currentUser, {
      displayName: screenName,
    });
    return firebaseAuth.currentUser;
  } catch (error) {
    console.error(error);
  }
};
