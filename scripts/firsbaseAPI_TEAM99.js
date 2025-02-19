//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAgvuh3FihOizpVLG-zST25CSV9gsBt5wM" ,
    authDomain: "comp1800-4700d.firebaseapp.com" ,
    projectId: "comp1800-4700d" ,
    storageBucket: "comp1800-4700d.firebasestorage.app" ,
    messagingSenderId: "120242070940" ,
    appId: "1:120242070940:web:f72d89aef3d809be1ad459"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

