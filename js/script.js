// Menu mobile - Version corrigée
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuBtn && mainNav) {
        menuBtn.addEventListener('click', function() {
            // Basculer la classe 'active' sur le menu
            mainNav.classList.toggle('active');
            
            // Changer l'icône du burger en croix quand ouvert
            const icon = this.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Fermer le menu lorsqu'on clique sur un lien (optionnel)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                mainNav.classList.remove('active');
                menuBtn.querySelector('i').classList.remove('fa-times');
                menuBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Vérifier la taille de l'écran au chargement et au redimensionnement
    function checkScreenSize() {
        if (window.innerWidth > 992) {
            mainNav.classList.remove('active');
            if (menuBtn.querySelector('i')) {
                menuBtn.querySelector('i').classList.remove('fa-times');
                menuBtn.querySelector('i').classList.add('fa-bars');
            }
        }
    }

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});