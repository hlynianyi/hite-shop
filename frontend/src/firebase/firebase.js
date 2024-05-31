import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARXJpT083wDBewW3W4yDpe4yVp7uMnycc",
  authDomain: "hite-shop-dc700.firebaseapp.com",
  projectId: "hite-shop-dc700",
  storageBucket: "hite-shop-dc700.appspot.com",
  messagingSenderId: "990944295487",
  appId: "1:990944295487:web:10b886d33e1821a2dbd68a",
  measurementId: "G-R8EMSYGW6K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
