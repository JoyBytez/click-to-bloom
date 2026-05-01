document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.f');
    const petals = document.querySelectorAll('.flower__leaf')
    const openSound = document.querySelector('#openSound');
    const closeSound = document.querySelector('#closeSound');

    flowers.forEach(flower => {
        flower.addEventListener('click', () => {
            flower.classList.toggle('is-open');
            
            setTimeout(() => {
                if (openSound && flower.classList.contains('is-open')) {
                    openSound.currentTime = 0;
                    openSound.play();
                } else if (closeSound) {
                    closeSound.currentTime = 0;
                    closeSound.play();
                }
            }, 140);
        });
    });
});
