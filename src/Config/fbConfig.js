import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVPeqD0u1mIm-Wcm_WiL-qMLAr-hlfczQ",
    authDomain: "exam2020-884a3.firebaseapp.com",
    databaseURL: "https://exam2020-884a3.firebaseio.com",
    projectId: "exam2020-884a3",
    storageBucket: "exam2020-884a3.appspot.com",
    messagingSenderId: "465568256488",
    appId: "1:465568256488:web:39c803893d2e23bac4d45d",
    measurementId: "G-BDXPR725JG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebase.firestore()

  export default firebase;