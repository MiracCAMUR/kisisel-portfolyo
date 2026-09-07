function triggerAllCardsAnimation() {
    const allCards = document.querySelectorAll('.categories .card');

    allCards.forEach(card => {
        card.classList.add('pulse-active');
    });

    setTimeout(() => {
        allCards.forEach(card => {
            card.classList.remove('pulse-active');
        });
    }, 1500);
}