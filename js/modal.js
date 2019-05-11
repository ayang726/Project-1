// slider initializer
var elems = document.querySelector('#slider');
var slider = M.Slider.init(elems, { interval: 9999999, height: 350 });
slider.pause();
// modal initializer
$('#modal').modal({
    onCloseEnd: dismissingModal,
    onOpenStart: openModal
});



// Open dismiss modals
function dismissingModal() {
    if (mediaRecorder.state === "recording") {
        mediaRecorder.stop();
    }
    stopSound();
    //on modal complete
    //pause sound
    //upload video
}

function openModal() {
    // pass in child's name and exercise name in startRecording(childName, exerciseName)
    // startRecording();
    slideToPage(0);
}

// button onclick
$(".choose-exercise-btn").on("click", function () {
    console.log("choose exercise btn click");


    var name = currentUser.displayName.trim().replace(" ", "-");
    var exercise = $(this).attr("data-name");

    console.log("I'm called. msg-120");
    console.log(name);
    console.log(exercise);
    startRecording(name, exercise);

    //here the id of the specific video will be loaded.
    var videoId = $(this).attr("data-video");
    // console.log("msg-110");
    // console.log(videoId);
    player.cueVideoById({ videoId: videoId })

});

// Slider functions
function slideToPage(page) {
    slider.set(page);
}

// youtube player
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;

function onYouTubeIframeAPIReady() {
    console.log("called");
    player = new YT.Player('youtube-player', {
        height: "100%",
        width: '100%',
        videoId: 'HUS3M0chi6I',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        // console.log("video ended");
        slideToPage(1)
        // slider.next();
        // slider.pause();
    }
}

// Three Modal Buttons Click Events
// showMe navigates to video page and resets the youtube video
// nowYou navigates to camera page.
// complete navigates to last page and show events

function showMe() {
    slideToPage(0);
    player.seekTo(0);
}

function nowYou() {
    player.stopVideo();
    slideToPage(1);

}

function complete() {
    player.stopVideo();
    slideToPage(2);
    stopRecording();

    setTimeout(() => {
        dismissingModal();
        $("#modal").modal("close");
    }, 5000);
}