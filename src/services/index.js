import { firebaseAuth, firestore } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { USERS, CIRCLES, EMAIL_DOMAIN } from "../utility";

export const authenticateUser = async (screenName, password) => {
  const email = screenName + EMAIL_DOMAIN;
  try {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (error) {
    throw Error(error);
  }
};

export const getUser = async (screenName) => {
  try {
    const userDoc = doc(firestore, USERS, screenName);
    const user = await getDoc(userDoc);
    return user.data();
  } catch (error) {
    throw Error(error);
  }
};

export const createUser = async (screenName, password) => {
  const email = screenName + EMAIL_DOMAIN;
  const user = {
    screenName,
    circles: [],
  };

  try {
    const userDoc = doc(firestore, USERS, screenName);
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
    await setDoc(userDoc, user);
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

export const createCircle = async (circleName, screenName) => {
  const circle = {
    name: circleName,
    creator: screenName,
    users: [screenName],
    messages: [],
  };

  try {
    const circleDoc = doc(collection(firestore, CIRCLES));
    const userDoc = doc(firestore, USERS, screenName);

    await setDoc(circleDoc, { ...circle, id: circleDoc.id });
    await updateDoc(userDoc, { circles: arrayUnion(circleDoc.id) });
  } catch (error) {
    throw Error(error);
  }
};

export const getCircle = async (id) => {
  try {
    const circleDoc = doc(firestore, CIRCLES, id);
    const circle = await getDoc(circleDoc);
    return circle.data();
  } catch (error) {
    throw Error(error);
  }
};
