// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT-n_YUho33GszguDeOGQ1EFJ5oDe_DoQ",
  authDomain: "downtown-fitness.firebaseapp.com",
  projectId: "downtown-fitness",
  storageBucket: "downtown-fitness.appspot.com",
  messagingSenderId: "330265574214",
  appId: "1:330265574214:web:6726a2f74e1f58d2bdc347",
  measurementId: "G-H2GDQXX20T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
