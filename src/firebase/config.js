import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB3AAeBfLElaWbpEBBWJIrErAgu8ZFBk-k",
  authDomain: "hercblog-aee44.firebaseapp.com",
  projectId: "hercblog-aee44",
  storageBucket: "hercblog-aee44.appspot.com",
  messagingSenderId: "1013910099313",
  appId: "1:1013910099313:web:ebaf640d1c845545c512d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};