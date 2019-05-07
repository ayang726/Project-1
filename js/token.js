$(document).ready(function () {
    $(".dropdown-trigger").dropdown();
});


$(".dropDownNumber").on("click", function () {
    $("#tokens").html("");
    var tokenNumber = $(this).attr("value");
    console.log(tokenNumber);
    for (i = 0; i < tokenNumber; i++) {
        $("#tokens").append(`<button onclick="changeColor${i}()" class="btn-floating btn-large waves-effect waves-light indigo lighten-1" id="starBtn${i}"><i
    class="material-icons">star</i></button>`);
    }

});



function changeColor0() {
    console.log("star was clicked");
    $("#starBtn0").removeClass("indigo lighten-1");
    $("#starBtn0").addClass("deep-orange lighten-1");
};
function changeColor1() {
    console.log("star was clicked");
    $("#starBtn1").removeClass("indigo lighten-1");
    $("#starBtn1").addClass("deep-orange lighten-1");
};
function changeColor2() {
    console.log("star was clicked");
    $("#starBtn2").removeClass("indigo lighten-1");
    $("#starBtn2").addClass("deep-orange lighten-1");
};
function changeColor3() {
    console.log("star was clicked");
    $("#starBtn3").removeClass("indigo lighten-1");
    $("#starBtn3").addClass("deep-orange lighten-1");
};
function changeColor4() {
    console.log("star was clicked");
    $("#starBtn4").removeClass("indigo lighten-1");
    $("#starBtn4").addClass("deep-orange lighten-1");
};

