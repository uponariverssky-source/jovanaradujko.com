// Project data - Replace with your actual project information
const projects = [
    {
        image: 'assets/images/projects/brutalism/monuments/Barutana_monument_spomenik_jovana_radujko_brutalizam_i_renesansa.jpg',
        title: 'Barutana Monument',
        location: 'Barutana, Montenegro',
        medium: 'Ink on paper, colored digitally in Photoshop',
        description: 'Detailed description of the project goes here. A few lines about the building, architectural style, or inspiration.'
    },
    {
        image: 'assets/images/projects/brutalism/monuments/Bratunac_monument_spomenik_jovana_radujko_brutalizam_i_renesansa.jpg',
        title: 'Bratunac Monument',
        location: 'Bratunac, Bosnia&Herzegovina',
        medium: 'Ink on paper, colored digitally in Photoshop',
        description: 'Another description with details about this particular drawing and what makes it special.'
    },
    {
        image: 'assets/images/projects/brutalism/monuments/Bubanj_monument_spomenik_jovana_radujko_brutalizam_i_renesansa.jpg',
        title: 'Bubanj Monument',
        location: 'Niš, Serbia',
        medium: 'Ink on paper, colored digitally in Photoshop',
        description: 'More information about this architectural drawing and its significance.'
    }
    // Add more projects as needed
];

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const project = projects[index];
    
    document.getElementById('lightbox-image').src = project.image;
    document.getElementById('lightbox-title').textContent = project.title;
    document.getElementById('lightbox-location').textContent = 'Location: ' + project.location;
    document.getElementById('lightbox-medium').textContent = 'Medium: ' + project.medium;
    document.getElementById('lightbox-desc').textContent = project.description;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close lightbox when clicking outside the content
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
