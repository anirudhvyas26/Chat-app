import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-b26a3.firebaseapp.com",
  projectId: "chatapp-b26a3",
  storageBucket: "chatapp-b26a3.appspot.com",
  messagingSenderId: "1033304753690",
  appId: "1:1033304753690:web:924d7fea1aacb6d7ceb3a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);