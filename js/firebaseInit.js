
// All Firebase configuration is in this one file now.

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiYcTLAl-EA0nw2c9Wb7AJ2pCmW_BxLJc",
    authDomain: "harcam-project-01.firebaseapp.com",
    databaseURL: "https://harcam-project-01.firebaseio.com",
    projectId: "harcam-project-01",
    storageBucket: "harcam-project-01.appspot.com",
    messagingSenderId: "430276248145",
    appId: "1:430276248145:web:fbc66731a52da2b0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var storage = firebase.storage();
var storeRef = storage.ref();
var database = firebase.database();