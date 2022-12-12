

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARYX7id8_6xMFRSnrlDVG8H5YXvXc09hI",
  authDomain: "react-cursos-85133.firebaseapp.com",
  projectId: "react-cursos-85133",
  storageBucket: "react-cursos-85133.appspot.com",
  messagingSenderId: "533935030829",
  appId: "1:533935030829:web:fe4650c55cbfe43e70eea4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );

