// Project data - Replace with your actual project information
const projects = [
    {
        image: 'assets/images/projects/project1-full.jpg',
        title: 'Project Title 1',
        location: 'Belgrade, Serbia',
        medium: 'Ink on paper',
        description: 'Detailed description of the project goes here. A few lines about the building, architectural style, or inspiration.'
    },
    {
        image: 'assets/images/projects/project2-full.jpg',
        title: 'Project Title 2',
        location: 'Novi Sad, Serbia',
        medium: 'Pencil and watercolor',
        description: 'Another description with details about this particular drawing and what makes it special.'
    },
    {
        image: 'assets/images/projects/project3-full.jpg',
        title: 'Project Title 3',
        location: 'Zagreb, Croatia',
        medium: 'Digital illustration',
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
