// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB22KdqHE5c6akqWqYiLwEABxDe8x0t77g",
  authDomain: "respiro-d0ed2.firebaseapp.com",
  projectId: "respiro-d0ed2",
  storageBucket: "respiro-d0ed2.appspot.com",
  messagingSenderId: "886767861858",
  appId: "1:886767861858:android:548be3b45f9c35a768913b"
};

const app = initializeApp(firebaseConfig);

// 👇 Esta es la parte clave para que funcione en Expo
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };



