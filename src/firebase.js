// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIslr9mKA4QqbAaG6MoliElWSgz5qSO2c",
  authDomain: "rivaldo-aktualisasi.firebaseapp.com",
  projectId: "rivaldo-aktualisasi",
  storageBucket: "rivaldo-aktualisasi.appspot.com",
  messagingSenderId: "914176176480",
  appId: "1:914176176480:web:75e1425cf9364b140bee05",
  measurementId: "G-JWD7L2ZDBD",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
