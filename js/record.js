
/* globals MediaRecorder */
// Spec is at http://dvcs.w3.org/hg/dap/raw-file/tip/media-stream-capture/RecordingProposal.html

/* This file has been modified from the original MediaRecorder Javascript file
    Audio recording features have been excluded.
    Comments were added to facilitate reading


    API for video recording:
    Recording button: button#rec
    Pause/Resume Button: button#pauseRes
    Stop Button: button#stop
    Video Tag (to display the video) : video
    Data paragraph tag: #data ( we don't need this, just displaying diagnostic data onto a p tag on screen)
    Link to save recorded video: a#downloadLink ( we shouldn't need this neither )
*/

var constraints = { audio: false, video: { width: { min: 320, ideal: 320, max: 640 }, height: { min: 240, ideal: 240, max: 480 }, framerate: 30 } };

var recBtn = document.querySelector('button#rec');
var pauseResBtn = document.querySelector('button#pauseRes');
var stopBtn = document.querySelector('button#stop');
var playBtn = document.querySelector("button#play");

var videoElement = document.querySelector('video');
var anotherVideo = document.querySelector('#anotherVideo');
var dataElement = document.querySelector('#data');
var downloadLink = document.querySelector('a#downloadLink');

videoElement.controls = false;

var mediaRecorder;
var chunks = [];
var count = 0;
var localStream = null;
var soundMeter = null;

// Get the video screen to show current camera input.
if (!navigator.mediaDevices.getUserMedia) {
    alert('navigator.mediaDevices.getUserMedia not supported on your browser, use the latest version of Firefox or Chrome');
} else {
    if (window.MediaRecorder == undefined) {
        alert('MediaRecorder not supported on your browser, use the latest version of Firefox or Chrome');
    } else {
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (stream) {
                localStream = stream;

                localStream.getTracks().forEach(function (track) {

                    if (track.kind == "video") {
                        track.onended = function (event) {
                            // console.log("video track.onended Audio track.readyState=" + track.readyState + ", track.muted=" + track.muted);
                        }
                    }
                });

                videoElement.srcObject = localStream;
                videoElement.play();

            }).catch(function (err) {
                /* handle the error */
                console.log('navigator.getUserMedia error: ' + err);
            });
    }
}


// Clicking Record button
function startRecording(childName = "alex", exerciseName = "Clap") {
    if (localStream == null) {
        alert('Could not get local stream from mic/camera');
    } else {
        // recBtn.disabled = true;
        // pauseResBtn.disabled = false;
        // stopBtn.disabled = false;

        /* use the stream */
        console.log('Start recording...');
        if (typeof MediaRecorder.isTypeSupported == 'function') {
			/*
				MediaRecorder.isTypeSupported is a function announced in https://developers.google.com/web/updates/2016/01/mediarecorder and later introduced in the MediaRecorder API spec http://www.w3.org/TR/mediastream-recording/
			*/
            if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
                var options = { mimeType: 'video/webm;codecs=vp9' };
            } else if (MediaRecorder.isTypeSupported('video/webm;codecs=h264')) {
                var options = { mimeType: 'video/webm;codecs=h264' };
            } else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8')) {
                var options = { mimeType: 'video/webm;codecs=vp8' };
            }
            console.log('Using ' + options.mimeType);
            mediaRecorder = new MediaRecorder(localStream, options);
        } else {
            console.log('isTypeSupported is not supported, using default codecs for browser');
            mediaRecorder = new MediaRecorder(localStream);
        }

        mediaRecorder.ondataavailable = function (e) {
            //log('mediaRecorder.ondataavailable, e.data.size='+e.data.size);
            chunks.push(e.data);
        };

        mediaRecorder.onerror = function (e) {
            console.log('mediaRecorder.onerror: ' + e);
        };

        mediaRecorder.onstart = function () {
            // console.log('mediaRecorder.onstart, mediaRecorder.state = ' + mediaRecorder.state);

            localStream.getTracks().forEach(function (track) {
                if (track.kind == "video") {
                    // console.log("onstart - Video track.readyState=" + track.readyState + ", track.muted=" + track.muted);
                }
            });

        };

        // Let mediaRecorder to listen to onstop function
        mediaRecorder.onstop = function () {
            // console.log('mediaRecorder.onstop, mediaRecorder.state = ' + mediaRecorder.state);

            var blob = new Blob(chunks, { type: "video/webm" });
            chunks = [];

            var videoURL = window.URL.createObjectURL(blob);

            console.log("Recorded video is at: " + videoURL);
            // here we hijack the code and write upload function. to save in child's profile
            // downloadLink.href = videoURL;

            // downloadLink.innerHTML = 'Click here to download your video!';
            // should change this to track time
            var rand = Math.floor((Math.random() * 10000000));
            var name = childName + "-" + exerciseName + rand + ".webm";
            // videoElement.srcObject = null;
            // videoElement.src = videoURL + "/" + name;

            name = "example.webm";
            storeRef.child("/video/" + name).put(blob);

            console.log(videoElement.src);
            // downloadLink.setAttribute("download", name);
            // downloadLink.setAttribute("name", name);
        };

        // mediaRecorder.onpause = function () {
        //     console.log('mediaRecorder.onpause, mediaRecorder.state = ' + mediaRecorder.state);
        // }

        // mediaRecorder.onresume = function () {
        //     console.log('mediaRecorder.onresume, mediaRecorder.state = ' + mediaRecorder.state);
        // }

        // mediaRecorder.onwarning = function (e) {
        //     console.log('mediaRecorder.onwarning: ' + e);
        // };

        // pauseResBtn.textContent = "Pause";

        mediaRecorder.start(10);

        localStream.getTracks().forEach(function (track) {
            console.log(track.kind + ":" + JSON.stringify(track.getSettings()));
            console.log(track.getSettings());
        })
    }
}

navigator.mediaDevices.ondevicechange = function (event) {
    console.log("mediaDevices.ondevicechange");
	/*
	if (localStream != null){
		localStream.getTracks().forEach(function(track) {
			if(track.kind == "audio"){
				track.onended = function(event){
					log("audio track.onended");
				}
			}
		});
	}
	*/
}

function stopRecording() {
    console.log("Complete button clicked");
    mediaRecorder.stop();
    console.log("stop mediarecorder again");
    mediaRecorder = null;
    slider.next();
    slider.pause();
    celebrate();
    playSound();

}

//browser ID
function getBrowser() {
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName = navigator.appName;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // In Opera, the true version is after "Opera" or after "Version"
    if ((verOffset = nAgt.indexOf("Opera")) != -1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset + 5);
    }
    // In Chrome, the true version is after "Chrome"
    else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset + 7);
    }
    // In Safari, the true version is after "Safari" or after "Version"
    else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
    // In Firefox, the true version is after "Firefox"
    else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In most other browsers, "name/version" is at the end of userAgent
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
        (verOffset = nAgt.lastIndexOf('/'))) {
        browserName = nAgt.substring(nameOffset, verOffset);
        fullVersion = nAgt.substring(verOffset + 1);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(";")) != -1)
        fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1)
        fullVersion = fullVersion.substring(0, ix);

    majorVersion = parseInt('' + fullVersion, 10);
    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }


    return browserName;
}

let storageRef = storage.ref('video').child("example.webm");
console.log(storageRef);
let URL = storageRef.getDownloadURL();
console.log(URL);

URL.then(function (url) {
    console.log(url);
    $("#anotherVideo").html(`<source src="${url}" type="video/mp4"></source>`);
});