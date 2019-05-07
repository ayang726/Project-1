var audioElement = document.createElement("audio");

function congratulate() {
    // $("#videoframe").hide();

    celebrate();
    playSound();
    displayVideo(currentUser.videoList[0])
}

// Function to run when the button is clicked
function celebrate() {
    var api_key = "IXHrCW7HbVSkilRoks118mHFZJi08MKa";
    var rating = "g";
    var offset = 10;
    var limit = 1;
    var q = randomQuery;
    var randomQ = ["minion", "disney", "puppy", "kittens", "peanuts", "balloons", "bugs bunny", "animals", "mickey mouse", "cartoons", "tom and jerry"];
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

        $("#congrats-display").html(`<img src="${celeb}" style="margin-top:10px"; width="100%" height="100%" />`);
    });
};

//cliend ID for spotify: 5726119031cb4611aa27f623afd2488d

function playSound() {

    audioElement.setAttribute("src", "./js/clap-mp3.mp3");
    audioElement.play();
};

function stopSound() {
    console.log("sound paused");
    audioElement.pause();
}