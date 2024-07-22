function hideAllSections() {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
}

function showSection(sectionId) {
    hideAllSections();
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    } else {
        console.error(`No se encontró la sección con ID: ${sectionId}`);
    }
}

function initializeApp() {
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    showSection('showDocuments');
}

document.addEventListener('DOMContentLoaded', initializeApp);
