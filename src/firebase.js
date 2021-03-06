import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAV7wQ3m5XqG8lw_3ZmdH4UmOwXV1KczVU",
    authDomain: "mymail-with-react.firebaseapp.com",
    projectId: "mymail-with-react",
    storageBucket: "mymail-with-react.appspot.com",
    messagingSenderId: "421682925796",
    appId: "1:421682925796:web:fa5b71eeb2d85904e41cf1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };