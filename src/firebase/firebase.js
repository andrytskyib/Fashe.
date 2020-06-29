import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD2omt_940DtoxNLqfbHmod22FkJnFzJLM",
    authDomain: "shop-react-a7a10.firebaseapp.com",
    databaseURL: "https://shop-react-a7a10.firebaseio.com",
    projectId: "shop-react-a7a10",
    storageBucket: "shop-react-a7a10.appspot.com",
    messagingSenderId: "493779704492",
    appId: "1:493779704492:web:6035860131698782531d09"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapshot = await userRef.get()

    if (!userSnapshot.exist) {
        const {displayName, email} = userAuth;
        const createAd = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAd,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user", error.message);
        }
    }

    return userRef
}

export const addCollectionAndDocument = async (collectionName, data) => {
    const collectionRef = firestore.collection(collectionName);

    const batch = firestore.batch();

    data.forEach((item) => {
        const docRef = collectionRef.doc();
        batch.set(docRef, item)
    });

    return await batch.commit()
}

export default firebase;
