$('.slider').slider();

function hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
} else {
    alert('getUserMedia() is not supported by your browser');
}

const constraints = {
    video: true
};

const video = document.querySelector('#videodisplay');

navigator.mediaDevices.getUserMedia(constraints).
    then((stream) => { video.srcObject = stream });

const hdConstraints = {
    video: { width: { min: 1280 }, height: { min: 720 } }
};

navigator.mediaDevices.getUserMedia(hdConstraints).
    then((stream) => { video.srcObject = stream });


const vgaConstraints = {
    video: { width: { exact: 640 }, height: { exact: 480 } }
};