// Menu mobile
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.main-nav').classList.toggle('active');
});

// Formulaire de signalement - Étapes
const nextBtn = document.querySelector('.next-btn');
if (nextBtn) {
    nextBtn.addEventListener('click', function() {
        // Validation et passage à l'étape suivante
        alert('Fonctionnalité à implémenter : validation et passage à l\'étape suivante');
    });
}

// Connexion sécurisée
const loginForm = document.querySelector('.secure-login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Validation et connexion
        alert('Fonctionnalité à implémenter : validation et connexion sécurisée');
    });
}

// Détection de la taille de l'écran pour ajustements
function checkScreenSize() {
    if (window.innerWidth > 992) {
        document.querySelector('.main-nav').style.display = 'flex';
    } else {
        document.querySelector('.main-nav').style.display = 'none';
    }
}

window.addEventListener('resize', checkScreenSize);
checkScreenSize();