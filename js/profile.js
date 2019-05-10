// set timeout will be replaced in the future

$(document).ready(function () {
    console.log(currentUser);
    setTimeout(function () {

        for (var i = 0; i < currentUser.videoList.length; i++) {
            displayVideo(currentUser.videoList[i]);
        }
    }, 1000);

});


function displayVideo(fileName) {
    console.log("message140 " + fileName)
    let storageRef = storage.ref('/video/').child(fileName);
    console.log(storageRef);
    let URL = storageRef.getDownloadURL();
    console.log(URL);

    URL.then(function (url) {
        console.log("this is the url");
        console.log(url);
        $(".studentVideoCards").append(`<div class="card">
        <div class="card-image">
            <video id="anotherVideo" width="320" height="240" controls><source src="${url}" type="video/mp4"></source></video>
        </div>
        <div class="card-content">
            <p>
                <div class="card-title indigo-text" id="name">${currentUser.displayName}</div>
            </p>
        </div>
    </div>`);
    });

};

