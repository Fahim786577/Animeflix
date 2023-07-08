import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBgAYglDW6ItuzCMTImMx0uYkcvocrrn_M",
    authDomain: "animeflix-5bd54.firebaseapp.com",
    projectId: "animeflix-5bd54",
    storageBucket: "animeflix-5bd54.appspot.com",
    messagingSenderId: "530653638359",
    appId: "1:530653638359:web:64cc1d9b595a5fe417ca92",
    measurementId: "G-NC42VK15QM"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export {firebase};
  