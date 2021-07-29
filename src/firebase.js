import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdNLfZNxMtBg6_gMm5Xd_dYs5QEUDhsXA",
  authDomain: "clone-s.firebaseapp.com",
  projectId: "clone-s",
  storageBucket: "clone-s.appspot.com",
  messagingSenderId: "391773669819",
  appId: "1:391773669819:web:876e5d92580e4930429c9e",
  measurementId: "G-YRD231KEET",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { db, auth, provider };
