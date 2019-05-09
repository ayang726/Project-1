// Your web app's Firebase configuration



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

    //alert("Your message has been successfully sent📤. We will get back to you soon. Thank you!");

    // Clears all of the text-boxes
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");

    // Uploads employee data to the database
    database.ref("/users/" + currentUser.uid + "/messages").push(newMsg);
});




