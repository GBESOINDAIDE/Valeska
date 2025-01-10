document.addEventListener('scroll', () => {
    const fullScreenBlock = document.querySelector('.full-screen-block');
    const scrollPosition = window.scrollY; // Position actuelle du défilement

    if (scrollPosition > 100) { // Rétrécir si on dépasse 100px de défilement
        fullScreenBlock.classList.add('shrunk');
    } else {
        fullScreenBlock.classList.remove('shrunk');
    }
});
