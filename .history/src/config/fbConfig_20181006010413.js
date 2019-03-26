import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDRkQAoxfrISo0w12ziLMuu9NIZQ7Nbzfo",
  authDomain: "net-ninja-mariplan.firebaseapp.com",
  databaseURL: "https://net-ninja-mariplan.firebaseio.com",
  projectId: "net-ninja-mariplan",
  storageBucket: "net-ninja-mariplan.appspot.com",
  messagingSenderId: "389201592561"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
