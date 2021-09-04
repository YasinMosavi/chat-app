import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDIR-yrvD9fQRk2a29Ybsjl3iONF9nOz-4",
    authDomain: "yasgram-56528.firebaseapp.com",
    projectId: "yasgram-56528",
    storageBucket: "yasgram-56528.appspot.com",
    messagingSenderId: "991066548765",
    appId: "1:991066548765:web:0257daf6f05414bddc74f4"
  }).auth();
