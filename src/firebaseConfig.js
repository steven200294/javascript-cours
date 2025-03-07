import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArF4aJ6qBy0dRWUyomzOM06102MvWdXzM",
  authDomain: "cours-js-d8f9c.firebaseapp.com",
  projectId: "cours-js-d8f9c",
  storageBucket: "cours-js-d8f9c.appspot.com",
  messagingSenderId: "1015648595830",
  appId: "1:1015648595830:web:b0c3c4d2d5a23d6c5f3d8b"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;