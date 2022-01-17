import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAfnGVltAqquS3i1TzQxbylYkoLKCy1Wb0",
    authDomain: "instagram-clone-8e149.firebaseapp.com",
    projectId: "instagram-clone-8e149",
    storageBucket: "instagram-clone-8e149.appspot.com",
    messagingSenderId: "205310793423",
    appId: "1:205310793423:web:02bc8536ce182906c8c9ba"
};


const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();


export default db