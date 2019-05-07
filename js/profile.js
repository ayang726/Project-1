

// set timeout will be replaced in the future

$(document).ready(function () {
    console.log(currentUser);
    setTimeout(function () {
        displayVideo(currentUser.videoList[0]);
    }, 1000);

});


function displayVideo(fileName) {
    console.log("message140 " + fileName)
    let storageRef = storage.ref('/video').child(fileName);
    console.log(storageRef);
    let URL = storageRef.getDownloadURL();
    console.log(URL);

    URL.then(function (url) {
        console.log(url);
        $("#anotherVideo").html(`<source src="${url}" type="video/mp4"></source>`);
    });

};