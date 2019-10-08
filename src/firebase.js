
import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyCMmsHKCatvoUNEta3bmcHu-nWwNoH2YCY",
    authDomain: "todoist-rebuild.firebaseapp.com",
    databaseURL: "https://todoist-rebuild.firebaseio.com",
    projectId: "todoist-rebuild",
    storageBucket: "todoist-rebuild.appspot.com",
    messagingSenderId: "716395937740",
    appId: "1:716395937740:web:fbe034581afe664700e769",
  
});

export {firebaseConfig as firebase};