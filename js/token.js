$(document).ready(function () {
    $(".dropdown-trigger").dropdown();


    $(".dropdown-trigger").on("click", function () {
        $("#tokens").html("");
    });

    $(".dropDownNumber").on("click", function () {
        var tokenNumber = $(this).attr("value");
        console.log(tokenNumber);
        for (i = 0; i < tokenNumber; i++) {

            $("#tokens").append(`<button class="btn-floating btn-large waves-effect waves-light indigo starBtn" ><i

    class="material-icons">star</i></button>`);
        }
        $(".starBtn").on("click", function () {
            console.log(this);
            $(this).toggleClass("indigo");
            $(this).toggleClass("deep-orange");
        });
    });





});


