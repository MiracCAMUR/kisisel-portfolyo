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

function openProjectsModal() {
    const modal = document.getElementById('projectsModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeProjectsModal() {
    const modal = document.getElementById('projectsModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function openMail(event) {
    event.preventDefault(); // Sayfanın yukarı kaymasını veya varsayılan link davranışı yapmasını engeller
    
    // Kullanıcının telefondan mı yoksa bilgisayardan mı girdiğini tespit ediyoruz
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // 📱 Telefondaysa: Doğrudan cihazdaki mail/Gmail uygulamasını açar
        window.location.href = "mailto:mmiraccamur@gmail.com";
    } else {
        // 💻 Bilgisayardaysa: Her koşulda yeni sekmede web üzerinden Gmail'i açar
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=mmiraccamur@gmail.com", "_blank");
    }
}

function openSocialLink(event, webUrl, platform) {
    event.preventDefault();
    
    // Kullanıcının telefondan mı yoksa bilgisayardan mı girdiğini tespit ediyoruz
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        let appScheme = webUrl;
        
        // Mobil cihazlarda ilgili uygulama yüklüyse doğrudan uygulamayı açmaya çalışır
        if (platform === 'instagram') {
            appScheme = `instagram://user?username=${webUrl.split('/').pop()}`;
        } else if (platform === 'linkedin') {
            appScheme = `linkedin://in/${webUrl.split('/in/')[1]}`;
        } else if (platform === 'github') {
            appScheme = `github://u/${webUrl.split('github.com/')[1]}`;
        }
        
        // Uygulamayı tetikler, eğer uygulama yoksa tarayıcı üzerinden web sitesine devam eder
        window.location.href = appScheme;
        setTimeout(() => {
            window.open(webUrl, '_blank');
        }, 500);
    } else {
        // Bilgisayardaysa: Doğrudan yeni sekmede web adresini açar
        window.open(webUrl, '_blank');
    }
}
// --- MOBİL ELEMENT SIRALAMA VE AKIŞ DÜZENLEYİCİSİ ---
window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        const introContent = document.querySelector('.intro-content');
        const hint = document.querySelector('.intro-hint');
        const binary = document.querySelector('.binary-signature, .easter-egg, [class*="binary"]');

        // İstediğin sıralama: Önce intro yazısı, hemen altında binary, onun altında "Kategorilere Göz At"
        if (introContent && hint && binary) {
            introContent.appendChild(binary); // Binary'yi yazının altına al
            introContent.appendChild(hint);   // Hint'i binary'nin altına al
        }
    }
});