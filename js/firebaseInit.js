
// All Firebase configuration is in this one file now.

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBNBdNhl-_z2vGoHdtdPEkpKRvQ5ID5MdM",
    authDomain: "nowyou-recordedvideos.firebaseapp.com",
    databaseURL: "https://nowyou-recordedvideos.firebaseio.com",
    projectId: "nowyou-recordedvideos",
    storageBucket: "nowyou-recordedvideos.appspot.com",
    messagingSenderId: "508680410714",
    appId: "1:508680410714:web:f41877e47f46ca92"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var storage = firebase.storage();
var storeRef = storage.ref();
var database = firebase.database();