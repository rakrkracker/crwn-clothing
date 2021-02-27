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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // If signed out, do nothin
    if (!userAuth) return;

    // Get user reference and data (if exists)
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // If data doesn't exists, create document
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;