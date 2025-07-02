document.addEventListener('DOMContentLoaded', function() {
    var chevron = document.getElementById('chevron-down');
    if (chevron) {
        chevron.addEventListener('click', function() {
            var target = document.getElementById('project-snippets');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Hamburger menu toggle
    var hamburger = document.getElementById('nav-hamburger');
    var navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            var isActive = navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });
    }
}); 