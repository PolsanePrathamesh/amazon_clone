import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAz_uXLoQ6rzOF8h0I5po_T6tCSYYiTTWk",
    authDomain: "next-js-b1aef.firebaseapp.com",
    projectId: "next-js-b1aef",
    storageBucket: "next-js-b1aef.appspot.com",
    messagingSenderId: "1068259145727",
    appId: "1:1068259145727:web:723dee392d7f4a03a4d9ca",
    measurementId: "G-LN6CMYRVVT",
};
const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

export const db = app.firestore();

// no analitycs

// go authentication
// enable google
// valid email
// web sdk configuration
// change .env
