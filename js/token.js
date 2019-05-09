$(document).ready(function () {
    $(".dropdown-trigger").dropdown();



    $(".dropDownNumber").on("click", function () {
        $("#tokens").html("");
        var tokenNumber = $(this).attr("value");
        console.log(tokenNumber);
        for (i = 0; i < tokenNumber; i++) {
            $("#tokens").append(`<button class="btn-floating btn-large waves-effect waves-light black starBtn" id="starBtn${i}" ><i

    class="material-icons">star</i></button>`);
        }
        $(".starBtn").on("click", function () {
            console.log(this);
            $(this).toggleClass("black");
            $(this).toggleClass("orange");
        });
    });





});


