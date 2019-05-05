function congratulate() {
    $("#videoframe").hide();
    celebrate();
    playSound();
}

// Function to run when the button is clicked
function celebrate() {
    var api_key = "IXHrCW7HbVSkilRoks118mHFZJi08MKa";
    var rating = "g";
    var offset = 10;
    var limit = 1;
    var q = randomQuery;
    var randomQ = ["minion", "disney", "happy", "kid", "clapping", "balloons", "dance", "party", "celebrate", "cartoons", "hooray"];
    var randomQuery = getRandomArrayElement(randomQ);

    function getRandomArrayElement(randomQ) {
        var min = 0;
        var max = (randomQ.length - 1);
        var randIndex = Math.floor(Math.random() * (max - min)) + min;
        return randomQ[randIndex];
    };


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + randomQuery + "&api_key=" + api_key + "&limit=" + limit + "&rating=" + rating + "&offset=" + offset;


    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json"
    }).then(function (response) {
        var celeb = response.data[0].images.original.url;

        $("#congrats-display").html(`<img src="${celeb}" style="margin-top:10px"; width="400px" height="200px" />`);
    });
};

function playSound() {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./js/clap-mp3.mp3");
    audioElement.play();
};