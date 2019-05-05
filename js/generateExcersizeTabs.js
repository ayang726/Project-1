var generateExerciseCards = {

    exerciseName: {
        1: 'Touch Cheeks',
        2: 'Clap',
        3: 'Touch Head',
        4: 'Hug',
        5: 'Touch Nose',
        6: 'Touch Shoulders',
    },

    thumbnail: {
        1: 'Assets/Images/Touch_Cheeks.png',
        2: 'Assets/Images/Clap.png',
        3: 'Assets/Images/Touch_Head.png',
        4: 'Assets/Images/Hug.png',
        5: 'Assets/Images/Touch_Nose.png',
        6: 'Assets/Images/Touch_Shoulders.png',
    },

    video: {
        1: 'https://youtu.be/HUS3M0chi6I',
        2: 'https://youtu.be/ttJ5or1fCZk',
        3: 'https://youtu.be/9c7kKN-rhTU',
        4: 'https://youtu.be/vkpYWtJdD3E',
        5: 'https://youtu.be/CSBc9s4gvWU',
        6: 'https://youtu.be/TIW-83Xfmog',
    },


}


for (var i = 0; i < Object.keys(generateExerciseCards.exerciseName).length; i++) {
    $('#exerciseCard').append(`
    <div class="col s6 m4">
                    <div class="card">
                        <div class="card-image">
                            <img src="${Object.values(generateExerciseCards.thumbnail)[i]}">
                            <button class="modal-trigger btn-floating halfway-fab waves-effect waves-light red"
                                id="exercise02" data-name="${Object.values(generateExerciseCards.exerciseName)[i]}" data-video="${Object.values(generateExerciseCards.video)[i]}data-target="modal"><i class="material-icons">video_call</i></button>
                        </div>
                        <div class="card-content">
                            <p>${Object.values(generateExerciseCards.exerciseName)[i]}</p>
                        </div>
                    </div>
    `)
};