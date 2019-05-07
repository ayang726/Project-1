
// All Firebase configuration is in this one file now.

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWcZwrJrpVk1Wac6b1cbEdPPtOx-5Sbvs",
    authDomain: "contact-us-page-36e86.firebaseapp.com",
    databaseURL: "https://contact-us-page-36e86.firebaseio.com",
    projectId: "contact-us-page-36e86",
    storageBucket: "contact-us-page-36e86.appspot.com",
    messagingSenderId: "817558500147",
    appId: "1:817558500147:web:b847921b48e3c270"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var storage = firebase.storage();
var storeRef = storage.ref();
var database = firebase.database();