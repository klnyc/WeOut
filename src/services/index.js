import { firebaseAuth, firestore } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Collections
const USERS = "users";

export const authenticateUser = async (screenName, password) => {
  const email = screenName + "@weout.web.app";
  try {
    const response = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return response.user;
  } catch (error) {
    throw Error(error);
  }
};

export const getUser = async (screenName) => {
  try {
    const user = await getDoc(doc(firestore, USERS, screenName));
    return user.data();
  } catch (error) {
    throw Error(error);
  }
};

export const createUser = async (screenName, password) => {
  const email = screenName + "@weout.web.app";
  try {
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
    await updateProfile(firebaseAuth.currentUser, {
      displayName: screenName,
    });
    const user = {
      screenName,
      circles: [],
    };
    await setDoc(doc(firestore, USERS, screenName), user);
    return user;
  } catch (error) {
    throw Error(error);
  }
};

export const signOutUser = async () => {
  try {
    await signOut(firebaseAuth);
  } catch (error) {
    throw Error(error);
  }
};

export const getSessionUserId = () => {};
