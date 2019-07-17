document.addEventListener('DOMContentLoaded', () => {

    // const controls = [
    //     'play-large', // The large play button in the center
    //     'play', // Play/pause playback
    //     'progress', // The progress bar and scrubber for playback and buffering
    //     'current-time', // The current time of playback
    //     'duration', // The full duration of the media
    //     'fullscreen', // Toggle fullscreen
    //     'volume',
    // ];



    const controls = [
        'play-large', // The large play button in the center
        'play', // Play/pause playback
        'volume',
        'fullscreen',

        'progress', // The progress bar and scrubber for playback and buffering

    ];

    const audioControl = [
        'play', // Play/pause playback
        'progress', // The progress bar and scrubber for playback and buffering
        'current-time', // The current time of playback
        'volume',

    ];

    const player = new Plyr('#video-player', { controls });

    const audio1 = new Plyr('#audio-player1', { controls: audioControl });
    const audio2 = new Plyr('#audio-player2', { controls: audioControl });
    const audio3 = new Plyr('#audio-player3', { controls: audioControl });
    const audio4 = new Plyr('#audio-player4', { controls: audioControl });
    const audio5 = new Plyr('#audio-player5', { controls: audioControl });
    const audio6 = new Plyr('#audio-player6', { controls: audioControl });


    window.player = player;

});

$(document).ready(function(){


    $('.block-advantages .plyr').on('click', 'button.plyr__control--overlaid', function() {
        $('.block-advantages .plyr__controls').css("display", "flex");
    });

    $('.block-ourteam__audio-set').on('click', 'button.plyr__control', function() {
        $('.block-ourteam__audio-volume').css("display", "flex");
        $('.block-ourteam_audio_mute').css("display", "block");

    });
});
