import { firebaseAuth, firestore } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Collections
const USERS = "users";

export const authenticateUser = async (screenName, password) => {
  const email = screenName + "@weout.web.app";
  try {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
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
  const user = {
    screenName,
    circles: [],
  };

  try {
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
    await setDoc(doc(firestore, USERS, screenName), user);
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


