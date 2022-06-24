import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCX4S19JEGIJnf255mMBKf609TyjYb8fvk",
    authDomain: "amir-michal-homepage.firebaseapp.com",
    projectId: "amir-michal-homepage",
    storageBucket: "amir-michal-homepage.appspot.com",
    messagingSenderId: "668244217822",
    appId: "1:668244217822:web:3df6be5852f87331ab574f",
    measurementId: "G-QP2T9TXQW6"
  };

firebase.initializeApp(firebaseConfig)

export { firebase };
