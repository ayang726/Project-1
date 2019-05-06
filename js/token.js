
$("#one").on("click", function () {
    console.log("one token please")
    $("#tokens").html(`<button onclick="changeColor()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn"><i
    class="material-icons">star</i></button>`)
});


$("#two").on("click", function () {
    console.log("one token please")
    $("#tokens").html(`<button onclick="changeColor()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn"><i
    class="material-icons">star</i></button><button onclick="changeColor2()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn2"><i
    class="material-icons">star</i></button>`)
});

$("#three").on("click", function () {
    console.log("one token please")
    $("#tokens").html(`<button onclick="changeColor()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn"><i
    class="material-icons">star</i></button><button onclick="changeColor2()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn2"><i
    class="material-icons">star</i></button><button onclick="changeColor3()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn3"><i
    class="material-icons">star</i></button>`)
});

$("#four").on("click", function () {
    console.log("one token please")
    $("#tokens").html(`<button onclick="changeColor()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn"><i
    class="material-icons">star</i></button><button onclick="changeColor2()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn2"><i
    class="material-icons">star</i></button><button onclick="changeColor3()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn3"><i
    class="material-icons">star</i></button><button onclick="changeColor4()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn4"><i
    class="material-icons">star</i></button>`)
});

$("#five").on("click", function () {
    console.log("one token please")
    $("#tokens").html(`<button onclick="changeColor()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn"><i
    class="material-icons">star</i></button><button onclick="changeColor2()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn2"><i
    class="material-icons">star</i></button><button onclick="changeColor3()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn3"><i
    class="material-icons">star</i></button><button onclick="changeColor4()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn4"><i
    class="material-icons">star</i></button><button onclick="changeColor5()" class="btn-floating btn-large waves-effect waves-light black" id="starBtn5"><i
    class="material-icons">star</i></button>`)
});



function changeColor() {
    console.log("star was clicked");
    $("#starBtn").removeClass("black");
    $("#starBtn").addClass("orange");
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
function changeColor5() {
    console.log("star was clicked");
    $("#starBtn5").removeClass("black");
    $("#starBtn5").addClass("orange");
};

