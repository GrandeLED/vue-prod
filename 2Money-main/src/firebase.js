// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGR26IwXY1EeSaLZqdSEU3AVrJWzjDDIY",
  authDomain: "step-c9a70.firebaseapp.com",
  projectId: "step-c9a70",
  storageBucket: "step-c9a70.appspot.com",
  messagingSenderId: "372116550732",
  appId: "1:372116550732:web:XXXXXX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
