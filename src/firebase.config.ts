// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoG8-bccGes7A3EcYywcmloCa3eXd_OV0",
  authDomain: "volakadu-website.firebaseapp.com",
  projectId: "volakadu-website",
  storageBucket: "volakadu-website.appspot.com",
  messagingSenderId: "858542397956",
  appId: "1:858542397956:web:c996397e7b55764de47351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {
  db
}