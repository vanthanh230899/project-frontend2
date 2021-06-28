import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDErlo6zJItMOUE4a4xia1AZQV1B3qq6s4",
    authDomain: "project-frontend2-21c42.firebaseapp.com",
    databaseURL: "https://project-frontend2-21c42.firebaseio.com",
    projectId: "project-frontend2-21c42",
    storageBucket: "project-frontend2-21c42.appspot.com",
    messagingSenderId: "1017989596505",
    appId: "1:1017989596505:web:c8e67babc44347bea27848",
    measurementId: "G-0GZ860X9W5"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };

