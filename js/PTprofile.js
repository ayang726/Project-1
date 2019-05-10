
// console.log("ALERT ALERT ALERT")
// console.log(`this is what I want` + firebase.auth());
// let storageRef = storage.ref('/video').child;

// console.log("this is important");
// console.log(currentUser);
// Initialize the default app
// $(document).ready(function () {
//     firebase.auth().onAuthStateChanged
// import * as admin from 'firebase-admin';

var childInfo = {
    childIDs: ["6L8Ge1oUa0MOt8DOsjrGNVAVjVv2", "GwUMh0QQm3gHOUDO2qpyoyTsX7c2", "VxbyL8mZSUSbaosnB4lys5kfLqc2", "cq4T8tLSkhQoZ6fjZveGd8cgwTL2"],
    childNames: ["Alex", "Lindsey", "Deisha", "Maria"],
}


// var ChildVid = [""];
//function to use child IDs to pull the list of videos


function retrieveVideo(uid, index) {
    console.log(uid);
    console.log(index);
    database.ref("/users/" + uid).child("videoList").once("value", function (s) {
        s.forEach(video => {
            var fileName = video.val();
            displayVideo(fileName, childInfo.childNames[index]);
        });
    });

}


function displayVideo(fileName, childName) {
    console.log("message240 " + fileName)
    let storageRef = storage.ref('/video').child(fileName);
    console.log(storageRef);
    let URL = storageRef.getDownloadURL();
    console.log(URL);

    URL.then(function (url) {
        console.log("this is the url");
        console.log(url);

        $(".studentVideoCards").append(`<div class="card ${childName}" id="videoCards" value="${childName}">
        <div class="card-image">
            <video id="anotherVideo" width="100" height="100" controls><source src="${url}" type="video/mp4"></source></video>
        </div>
        <div class="card-content">
            <p>
                <div class="card-title" id="name">${childName}</div>
            </p>
        </div>
        </div>`);
        $(`.${childName}`).hide();
    }

    );
}

for (var i = 0; i < childInfo.childIDs.length; i++) {

    retrieveVideo(childInfo.childIDs[i], i);



}


// $(".studentVideoCards").hide()



for (var i = 0; i < childInfo.childNames.length; i++) {
    $(".studentVideoButtons").append(`<button class="deep-orange waves-effect waves-light btn-large" id="studentVideoButton">${childInfo.childNames[i]}</button>`)

}

$("#studentVideoButton").on("click", function () {
    $("#videoCards").hide();
    console.log($(this));
    var studentName = $(this).text();
    console.log(studentName);
    // console.log($("#videoCards").attr(value));

    for (var i = 0; i < childInfo.childNames.length; i++) {
        if (studentName === childInfo.childNames[i]) {
            // $(".studentVideoCards").show();
            var clickedStudent = childInfo.childNames[i]
            $(`.${clickedStudent}`).show();
        }
    }

});






// for (var i = 0; i < childInfo.childNames.length; i++) {
//     if (studentName === $("#videoCards").attr(value)) {
//         $(".studentVideoCards").show();
//         studentName.show();
//     }
// }






// for (var i = 0; i < childIDs.length; i++) {
//     $(".studentProfileLinks").append(`<li class="collection-item childNav"><a href="">${childIDs[i]}</a></li>`)
//     console.log(i);

// }

// $(".childNav").on("click", function () {

// $(document).ready(function () {
//     console.log(currentUser);
//     setTimeout(function () {

//         for (var i = 0; i < currentUser.videoList.length; i++) {
//             displayVideo(currentUser.videoList[i]);
//         }
//     }, 1000);

// });


// console.log("WHYYYYYY");
// console.log(database.ref(`/users/${childIDs[1]}/videoList`));

// function displayVideo() {

//     let vidref = database.ref(`/users/${childIDs[0]}/videoList`);
//     let geturl = vidref.getDownloadURL();
//     geturl.then()(function (url) {
//         console.log("this is the url");
//         console.log(url);
//         $(".studentVideoCards").append(`<div class="card">
//         <div class="card-image">
//             <video id="anotherVideo" width="320" height="240" controls><source src="${url}" type="video/mp4"></source></video>
//         </div>
//         <div class="card-content">
//             <p>
//                 <div class="card-title" id="name">name</div>
//             </p>
//         </div>
//     </div>`);
//     });
// }



// function displayVideo(fileName) {
//     let storageRef = storage.ref('/video').child(fileName);
//     let URL = storageRef.getDownloadURL();

//     URL.then(function (url) {
//         console.log("this is the url");
//         console.log(url);
//         $(".studentVideoCards").append(`<div class="card">
//             <div class="card-image">
//                 <video id="anotherVideo" width="320" height="240" controls><source src="${url}" type="video/mp4"></source></video>
//             </div>
//             <div class="card-content">
//                 <p>
//                     <div class="card-title" id="name">${currentUser.displayName}</div>
//                 </p>
//             </div>
//         </div>`);
//     });

// };























    // function addStudent(studentProfile) {

    //     $(".studentProfileLinks").append(`<li class="collection-item">${studentProfile}</li>`)

    // };

    // addStudent(storageRef);
// });

