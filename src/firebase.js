import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyADwGuBB7zdyC6KHSgkBILKeXOLXQl9DtA",
  authDomain: "crm-linkedin-2df15.firebaseapp.com",
  projectId: "crm-linkedin-2df15",
  storageBucket: "crm-linkedin-2df15.appspot.com",
  messagingSenderId: "756174000572",
  appId: "1:756174000572:web:607ea9ff314d1d554d5bb9",
};

firebase.initializeApp(config);

export default firebase;
