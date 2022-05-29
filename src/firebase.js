import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtEQkhF0aOLkEuQ-tk8Az3UaKy31hhyPo",
  authDomain: "we-out.firebaseapp.com",
  projectId: "we-out",
  storageBucket: "we-out.appspot.com",
  messagingSenderId: "483148257539",
  appId: "1:483148257539:web:d75b9d458e76f10f0cb136",
  measurementId: "G-45L30MXYBZ",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export { firebaseAuth, firestore };
