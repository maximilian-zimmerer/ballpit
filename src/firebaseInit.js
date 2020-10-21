import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
