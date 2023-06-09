import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEMy2rEJiWQJqi3jgf4_WbuSAIXi2n5QE",
  authDomain: "pesquisa-doutorado-98136.firebaseapp.com",
  projectId: "pesquisa-doutorado-98136",
  storageBucket: "pesquisa-doutorado-98136.appspot.com",
  messagingSenderId: "1011765011183",
  appId: "1:1011765011183:web:a19ed48c878c447335311a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }


