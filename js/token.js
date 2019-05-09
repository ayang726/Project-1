$(document).ready(function () {
    $(".dropdown-trigger").dropdown();


    // var state = $(this).attr("data-state");
    $(".dropdown-trigger").on("click", function () {
        $("#tokens").html("");
    });

    $(".dropDownNumber").on("click", function () {
        var tokenNumber = $(this).attr("value");
        console.log(tokenNumber);
        for (i = 0; i < tokenNumber; i++) {
            $("#tokens").append(`<button class="btn-floating btn-large waves-effect waves-light indigo starBtn" id="starBtn${i}" ><i
    class="material-icons">star</i></button>`);
        }
        $(".starBtn").on("click", function () {
            console.log(this);
            $(this).toggleClass("indigo");
            $(this).toggleClass("orange");
        });
    });




});

