
// All Firebase configuration is in this one file now.

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWUynieHBs00mL9wAydWO3nsMOsGVX-R8",
    authDomain: "click-counter-harcam-3178e.firebaseapp.com",
    databaseURL: "https://click-counter-harcam-3178e.firebaseio.com",
    projectId: "click-counter-harcam-3178e",
    storageBucket: "click-counter-harcam-3178e.appspot.com",
    messagingSenderId: "672151007179",
    appId: "1:672151007179:web:dd623268f38a2ed2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var storage = firebase.storage();
var storeRef = storage.ref();
var database = firebase.database();