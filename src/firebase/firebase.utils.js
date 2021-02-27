import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBY34FKaPA87JoirydX7Rm_opVyxzCveiE",
    authDomain: "crwn-db-8ddb2.firebaseapp.com",
    projectId: "crwn-db-8ddb2",
    storageBucket: "crwn-db-8ddb2.appspot.com",
    messagingSenderId: "989583582515",
    appId: "1:989583582515:web:027ec3005d2cb60fbc8a46"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;