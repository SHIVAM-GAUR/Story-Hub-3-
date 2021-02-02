import firebase from 'firebase'
require ("@firebase/firestore")


const firebaseConfig = {
    apiKey: "AIzaSyAeGybzr1G6ZgLqDi3iwAwVjAVyNqFqnqU",
    authDomain: "story-hub-17670.firebaseapp.com",
    projectId: "story-hub-17670",
    storageBucket: "story-hub-17670.appspot.com",
    messagingSenderId: "116248647141",
    appId: "1:116248647141:web:ee4b11b316b584d71e8b0c"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()