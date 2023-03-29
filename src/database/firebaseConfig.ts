import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLJfCkfrL2LL1nbuFOiaId8vBEscGAS68",
  authDomain: "pesquisa-doutorado.firebaseapp.com",
  projectId: "pesquisa-doutorado",
  storageBucket: "pesquisa-doutorado.appspot.com",
  messagingSenderId: "483890775800",
  appId: "1:483890775800:web:fb81c3262e3dbecfc79d0d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }