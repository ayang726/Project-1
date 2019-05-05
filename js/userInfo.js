var currentUser = {
    displayName: "",
    email: "",
    uid: "",
    videoList: []
};

$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            currentUser.displayName = user.displayName;
            currentUser.email = user.email;
            currentUser.uid = user.uid;
            $("#login-btn").text(currentUser.displayName);
            console.log(currentUser);
            console.log("msg - 137");
            database.ref("/users/" + currentUser.uid + "/videoList").on("value", function (s) {
                if (s.exists()) {
                    s.forEach(videoName => {
                        currentUser.videoList.push(videoName.val());
                    });
                    console.log("msg-139: VideoUrls updated" + currentUser);
                }
            });
        }
    });

});

