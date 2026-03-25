// ===== NAVIGATION =====
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Main nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').split('/').pop() === currentPage) {
            link.classList.add('active');
        }
    });

    // Auth buttons
    document.querySelectorAll('.auth-buttons a').forEach(link => {
        if (link.getAttribute('href').split('/').pop() === currentPage) {
            link.classList.add('active');
        }
    });
});