import { firebaseAuth, firestore } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
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
    const user = await getDoc(doc(firestore, USERS, response.user.displayName));
    return user;
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
