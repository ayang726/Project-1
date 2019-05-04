function congratulate() {
    $("#videoframe").hide();
    celebrate();
    playSound();
}


// Function to run when the button is clicked
function celebrate() {

    var queryURL = "https://api.tenor.com/v1/search?q=minions&key=B3RT5ZFYTZ7W&limit=20";

    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json"
    }).then(function (response) {
        var celeb = response.results[1].media[0].gif.url;
        //var celeb = response.results.media;
        console.log(celeb);
        //var celebs = [];
        //var randomCeleb = getRandomArrayElement(celebs);

        $("#congrats-display").html(`<img src="${celeb}" style="margin-top:10px"; />`);
    });
};

function playSound() {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./js/clap-mp3.mp3");
    audioElement.play();
};