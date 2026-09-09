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

function toggleBinary() {
    const sig = document.getElementById('binarySig');
    const binaryText = "01010011 01000001 01000111 01001001 01010100 01010100 01000001 01010010 01001001 01010101 01010011";
    const realText = "SAGITTARIUS";

    if (sig.innerText.trim() === binaryText) {
        sig.innerText = realText;
        sig.style.fontSize = "15px";          // 📌 İstediğin gibi fontu biraz büyüttük
        sig.style.letterSpacing = "5px";      // 📌 Harfler arası boşluğu verdik
        sig.style.color = "#33d1ff";
        sig.style.fontWeight = "bold";
        sig.style.textShadow = "0 0 15px rgba(51, 209, 255, 0.8)";
    } else {
        sig.innerText = binaryText;
        sig.style.fontSize = "12px";          // 📌 Binary haline geri dönünce eski 12px boyuta dönüyor
        sig.style.letterSpacing = "2px";      // 📌 Normal binary boşluğu
        sig.style.color = "rgba(51, 209, 255, 0.6)";
        sig.style.fontWeight = "normal";
        sig.style.textShadow = "0 0 8px rgba(51, 209, 255, 0.3)";
    }
}

function openSkillsModal() {
    const modal = document.getElementById('skillsModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeSkillsModal() {
    const modal = document.getElementById('skillsModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function openHobbiesModal() {
    const modal = document.getElementById('hobbiesModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeHobbiesModal() {
    const modal = document.getElementById('hobbiesModal');
    if (modal) {
        modal.classList.remove('active');
    }
}