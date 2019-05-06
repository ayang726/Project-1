// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBWcZwrJrpVk1Wac6b1cbEdPPtOx-5Sbvs",
    authDomain: "contact-us-page-36e86.firebaseapp.com",
    databaseURL: "https://contact-us-page-36e86.firebaseio.com",
    projectId: "contact-us-page-36e86",
    storageBucket: "contact-us-page-36e86.appspot.com",
    messagingSenderId: "817558500147",
    //appId: "1:817558500147:web:b847921b48e3c270"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


//Submit button for adding message - then update the database
$("#submitButton").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var name = $("#name").val().trim();
    var emailAdd = $("#email").val().trim();
    var message = $("#message").val().trim();
    var replied = "not yet";

    // Creates local "temporary" object for holding train data
    var newMsg = {
        name: name,
        emailAdd: emailAdd,
        message: message,
        replied: replied
    };

    alert("Your message has been successfully sent📤. We will get back to you soon. Thank you!");

    // Clears all of the text-boxes
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");

    // Uploads employee data to the database
    database.ref().push(newMsg);
});

//Create Firebase event for adding new message to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    // Store everything into a variable.
    var name = childSnapshot.val().name;
    var emailAdd = childSnapshot.val().emailAdd;
    var message = childSnapshot.val().message;

});




