import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig ={
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-b731b.firebaseapp.com",
  projectId: "examnotesai-b731b",
  storageBucket: "examnotesai-b731b.firebasestorage.app",
  messagingSenderId: "446988892571",
  appId: "1:446988892571:web:dacbccec82c6460d00893e"

};
console.log("Firebase Key:", import.meta.env.VITE_FIREBASE_APIKEY);
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };