

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_DATABASEURL,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  
} = getEnvironments();


// console.log(process.env);
// console.log(import.meta.env);

// Your web app's Firebase configuration
// Dev/Pro
// const firebaseConfig = {
//   apiKey: "AIzaSyARYX7id8_6xMFRSnrlDVG8H5YXvXc09hI",
//   authDomain: "react-cursos-85133.firebaseapp.com",
//   projectId: "react-cursos-85133",
//   storageBucket: "react-cursos-85133.appspot.com",
//   messagingSenderId: "533935030829",
//   appId: "1:533935030829:web:fe4650c55cbfe43e70eea4"
// };

// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyCoHIv8tnAzvyG6niXWU0T0uIopW6h6lkc",
//   authDomain: "journal-testing-aad28.firebaseapp.com",
//   databaseURL: "https://journal-testing-aad28.firebaseio.com",
//   projectId: "journal-testing-aad28",
//   storageBucket: "journal-testing-aad28.appspot.com",
//   messagingSenderId: "26779518772",
//   appId: "1:26779518772:web:f856336cc1a635a6fc0761"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  databaseURL: VITE_DATABASEURL,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// console.log(firebaseConfig);

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );

