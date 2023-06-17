import { initializeApp } from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAEMy2rEJiWQJqi3jgf4_WbuSAIXi2n5QE",
  authDomain: "pesquisa-doutorado-98136.firebaseapp.com",
  projectId: "pesquisa-doutorado-98136",
  storageBucket: "pesquisa-doutorado-98136.appspot.com",
  messagingSenderId: "1011765011183",
  appId: "1:1011765011183:web:a19ed48c878c447335311a"
};



if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export default firebase;