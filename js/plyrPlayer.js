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
    ];

    const audioControl = [
        'play', // Play/pause playback
        'progress', // The progress bar and scrubber for playback and buffering
        'current-time', // The current time of playback
        'captions',
        'volume',

    ];

    const player = new Plyr('#video-player', { controls });

    const audio1 = new Plyr('#audio-player1', { controls: audioControl });
    const audio2 = new Plyr('#audio-player2', { controls: audioControl });
    const audio3 = new Plyr('#audio-player3', { controls: audioControl });
    const audio4 = new Plyr('#audio-player4', { controls: audioControl });
    const audio5 = new Plyr('#audio-player5', { controls: audioControl });

    window.player = player;

});
