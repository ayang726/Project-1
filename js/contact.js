$(".modal").modal();

$('document').ready(function () {
    $('input[type="text"], input[type="email"], textarea').focus(function () {
        var background = $(this).attr('id');
        $('#' + background + '-form').addClass('formgroup-active');
        $('#' + background + '-form').removeClass('formgroup-error');
    });
    $('input[type="text"], input[type="email"], textarea').blur(function () {
        var background = $(this).attr('id');
        $('#' + background + '-form').removeClass('formgroup-active');
    });

    function errorfield(field) {
        $(field).addClass('formgroup-error');
        console.log(field);
    }

    $("#waterform").submit(function (e) {
        e.preventDefault();
        var stopsubmit = false;

        if ($('#name').val() == "") {
            errorfield('#name-form');
            stopsubmit = true;
        }
        if ($('#email').val() == "") {
            errorfield('#email-form');
            stopsubmit = true;
        }
        if (stopsubmit) return false;

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
        $("#submitted").modal("open");
    });

});