$(document).ready(function () {
    $(".dropdown-trigger").dropdown();
});

var state = $(this).attr("data-state");

$(".dropDownNumber").on("click", function () {
    $("#tokens").html("");
    var tokenNumber = $(this).attr("value");
    console.log(tokenNumber);
    for (i = 0; i < tokenNumber; i++) {
        $("#tokens").append(`<button onclick="changeColor${i}()" class="btn-floating btn-large waves-effect waves-light" id="starBtn${i}" ><i
    class="material-icons">star</i></button>`);
    }
});



function changeColor0() {
    console.log("star was clicked");
    $("#starBtn0").removeClass("black");
    $("#starBtn0").addClass("orange");
};

function changeColor1() {
    console.log("star was clicked");
    $("#starBtn1").removeClass("black");
    $("#starBtn1").addClass("orange");
};
function changeColor2() {
    console.log("star was clicked");
    $("#starBtn2").removeClass("black");
    $("#starBtn2").addClass("orange");
};
function changeColor3() {
    console.log("star was clicked");
    $("#starBtn3").removeClass("black");
    $("#starBtn3").addClass("orange");
};
function changeColor4() {
    console.log("star was clicked");
    $("#starBtn4").removeClass("black");
    $("#starBtn4").addClass("orange");
};

