document.addEventListener('DOMContentLoaded', () => {

    const controls = [
        'play-large', // The large play button in the center
    ];

    const player = new Plyr('#player', { controls });


    window.player = player;
});
