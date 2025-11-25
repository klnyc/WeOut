import { firebaseAuth, firestore } from "./firebase";
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
  arrayRemove,
  deleteDoc,
} from "firebase/firestore";
import { USERS, CHATS, EMAIL_DOMAIN } from "./utility";

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
    chats: [],
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

export const createChat = async (chatName, screenName) => {
  const chat = {
    name: chatName,
    creator: screenName,
    users: [screenName],
    messages: [],
  };

  try {
    const chatDoc = doc(collection(firestore, CHATS));
    const userDoc = doc(firestore, USERS, screenName);

    await setDoc(chatDoc, { ...chat, id: chatDoc.id });
    await updateDoc(userDoc, { chats: arrayUnion(chatDoc.id) });
  } catch (error) {
    throw Error(error);
  }
};

export const getChat = async (id) => {
  try {
    const chatDoc = doc(firestore, CHATS, id);
    const chat = await getDoc(chatDoc);
    return chat.data();
  } catch (error) {
    throw Error(error);
  }
};

export const listChats = async (chatIds) => {
  try {
    const response = await Promise.all(chatIds.map((id) => getChat(id)));
    return response;
  } catch (error) {
    throw Error(error);
  }
};

export const deleteChat = async (chatId) => {
  try {
    const chatDoc = doc(firestore, CHATS, chatId);
    const chat = await getDoc(chatDoc);
    const users = chat.data().users;

    users.forEach(async (screenName) => {
      const userDoc = doc(firestore, USERS, screenName);
      await updateDoc(userDoc, { chats: arrayRemove(chatId) });
    });

    await deleteDoc(chatDoc);
  } catch (error) {
    throw Error(error);
  }
};

export const updateChat = async (request) => {
  try {
    const { chatId, message, userToAdd } = request;
    const chatDoc = doc(firestore, CHATS, chatId);

    if (message) {
      await updateDoc(chatDoc, { messages: arrayUnion(message) });
    }

    if (userToAdd) {
      const userDoc = doc(firestore, USERS, userToAdd);

      await updateDoc(userDoc, { chats: arrayUnion(chatId) });
      await updateDoc(chatDoc, { users: arrayUnion(userToAdd) });
    }
  } catch (error) {
    throw Error(error);
  }
};
