$('.slider').slider();
$('.slider').slider('pause');


$(".choose-exercise-btn").on("click", function () {
    $('#modal').modal({
        onCloseEnd: stopSound
    });
    //on modal complete
    //pause sound
    //upload video
});

// to be replaced by choose-exercise-btn
$("#exercise01").on("click", function () {
    $('#modal').modal({
        onCloseEnd: stopSound
    });
});

$("#exercise02").on("click", function () {
    $('#modal').modal();
});

$("#exercise03").on("click", function () {
    $('#modal').modal();
});


$("#exercise04").on("click", function () {
    $('#modal').modal();
});

$("#exercise05").on("click", function () {
    $('#modal').modal();
});

$("#exercise06").on("click", function () {
    $('#modaL').modal();
});
