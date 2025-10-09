// Maps lightbox functionality
function openMapLightbox() {
    const lightbox = document.getElementById('map-lightbox');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMapLightbox() {
    const lightbox = document.getElementById('map-lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside the content
document.getElementById('map-lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeMapLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMapLightbox();
    }
});
