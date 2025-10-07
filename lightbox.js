// Project data - Replace with your actual project information
const projects = [
    {
        image: 'assets/images/projects/brutalism/monuments/Barutana_monument_spomenik_jovana_radujko_brutalizam_i_renesansa.jpg',
        title: 'Project Title 1',
        location: 'Belgrade, Serbia',
        medium: 'Ink on paper',
        description: 'Detailed description of the project goes here. A few lines about the building, architectural style, or inspiration.'
    },

        {
        image: 'assets/images/projects/churches/Manastir_Manasija_Srbija_jovana_radujko.jpg',
        title: 'Manasija Monastery',
        location: 'Despotovac, Serbia',
        medium: 'Freehand drawing, ink on paper, coloring in Adobe Photoshop
    },

        {
        image: 'assets/images/projects/churches/Manastir_Ravanica_Srbija_jovana_radujko.jpg',
        title: 'Ravanica Monastery',
        location: 'Senj, Serbia',
        medium: 'Freehand drawing, ink on paper, coloring in Adobe Photoshop',
    
    },

        {
        image: 'assets/images/projects/brutalism/monuments/Barutana_monument_spomenik_jovana_radujko_brutalizam_i_renesansa.jpg',
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

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    showImage(currentIndex);
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showImage(index) {
    const project = projects[index];
    document.getElementById('lightbox-image').src = project.image;
    document.getElementById('lightbox-title').textContent = project.title;
    document.getElementById('lightbox-location').textContent = 'Location: ' + project.location;
    document.getElementById('lightbox-medium').textContent = 'Medium: ' + project.medium;
    document.getElementById('lightbox-desc').textContent = project.description;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % projects.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    showImage(currentIndex);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside the content
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Close lightbox with Escape key, navigate with arrow keys
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            previousImage();
        }
    }
});
