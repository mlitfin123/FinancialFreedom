import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { FirebaseAuthProvider } from "use-firebase-auth"
import firebase from "firebase/app"
import "firebase/auth"
 
const firebaseConfig = {
  //Load your Firebase Project configuration here
  apiKey: "AIzaSyA4DH-PBlLPQ8oKPeAcezP_BZZ7CMlnHXs",
    authDomain: "app-development-46e0d.firebaseapp.com",
    databaseURL: "https://app-development-46e0d.firebaseio.com",
    projectId: "app-development-46e0d",
    storageBucket: "app-development-46e0d.appspot.com",
    messagingSenderId: "825132991076",
    appId: "1:825132991076:web:1746558608afa40adf9571"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
ReactDOM.render(<FirebaseAuthProvider firebase={firebase}>
    <App />
  </FirebaseAuthProvider>, document.getElementById("root"));
registerServiceWorker();
