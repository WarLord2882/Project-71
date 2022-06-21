import firebase from "firebase";

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDJhjCQWpHhPdCVccmDWDMPgz7kSz0SQSs",
    authDomain: "complaint-5ab01.firebaseapp.com",
    projectId: "complaint-5ab01",
    storageBucket: "complaint-5ab01.appspot.com",
    messagingSenderId: "590897340009",
    appId: "1:590897340009:web:2c67348a3046aede904cf8"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
