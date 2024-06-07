// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "sistema-a6fe2.firebaseapp.com",
  projectId: "sistema-a6fe2",
  storageBucket: "sistema-a6fe2.appspot.com",
  messagingSenderId: "750621857737",
  appId: "1:750621857737:web:b3eb42614d00cae2377a18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const bancoExterno=getFirestore(app);
export {bancoExterno};