import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9dnVKS5OF4FLFiSXlMPAPgDEu_uQAMFY",
  authDomain: "chat-and-go-98fae.firebaseapp.com",
  projectId: "chat-and-go-98fae",
  storageBucket: "chat-and-go-98fae.firebasestorage.app",
  messagingSenderId: "572013641627",
  appId: "1:572013641627:web:fe51f336381b71612beb3e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});