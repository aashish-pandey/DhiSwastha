import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmn5Kal2mci9GQVLvqHK1k8WyGgK8T1h4",
  authDomain: "chat-f1032.firebaseapp.com",
  projectId: "chat-f1032",
  storageBucket: "chat-f1032.appspot.com",
  messagingSenderId: "810517662435",
  appId: "1:810517662435:web:c44eaa94d5ee92d37c93d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
