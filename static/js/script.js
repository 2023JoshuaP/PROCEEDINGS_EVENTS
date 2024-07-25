document.addEventListener('DOMContentLoaded', initializeApp);

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

function loadDocumentImages(sectionId, page = 1, pageSize = 5) {
    const section = document.getElementById(sectionId);
    const documentsGrid = section.querySelector('.documents-grid');
    documentsGrid.innerHTML = '';

    const documents = getDocuments();
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedDocuments = documents.slice(start, end);

    paginatedDocuments.forEach(doc => {
        const card = document.createElement('div');
        card.classList.add('document-card');
        
        const img = document.createElement('img');
        img.src = doc.imageUrl;
        img.alt = doc.title;
        
        const title = document.createElement('p');
        title.textContent = doc.title;

        card.appendChild(img);
        card.appendChild(title);

        // Añadir el manejador de eventos para hacer clic en la tarjeta
        card.addEventListener('click', () => {
            showDocumentDetails(doc);
        });

        documentsGrid.appendChild(card);
    });

    updatePagination(section, page, Math.ceil(documents.length / pageSize));
}

function updatePagination(section, currentPage, totalPages) {
    const pagination = section.querySelector('.pagination');
    pagination.innerHTML = '';

    const createPageButton = (text, page) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', () => loadDocumentImages(section.id, page));
        return button;
    };

    pagination.appendChild(createPageButton('Inicio', 1));
    for (let i = 1; i <= totalPages; i++) {
        pagination.appendChild(createPageButton(i, i));
    }
    pagination.appendChild(createPageButton('Final', totalPages));
}

function initializeApp() {
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
            if (sectionId === 'showDocuments' || sectionId === 'viewDocuments') {
                loadDocumentImages(sectionId);
            }
        });
    });

    document.getElementById('saveSettingsButton').addEventListener('click', validateAndSaveSettings);

    // Añadir el manejador de eventos para el botón de regreso
    document.getElementById('backToDocumentsButton').addEventListener('click', () => {
        showSection('showDocuments');
        loadDocumentImages('showDocuments');
    });

    showSection('showDocuments');
    loadDocumentImages('showDocuments');
}

function getDocuments() {
    return [
        { title: 'Documento 1', imageUrl: '../static/imagenes/imagen1.jpeg' },
        { title: 'Documento 2', imageUrl: '../static/imagenes/imagen2.png' },
        { title: 'Documento 3', imageUrl: '../static/imagenes/imagen3.jpeg' },
        { title: 'Documento 4', imageUrl: '../static/imagenes/imagen4.png' },
        { title: 'Documento 5', imageUrl: '../static/imagenes/imagen5.png' },
        { title: 'Documento 6', imageUrl: '../static/imagenes/imagen6.jpeg' },
        { title: 'Documento 7', imageUrl: '../static/imagenes/imagen7.jpeg' },
        { title: 'Documento 8', imageUrl: '../static/imagenes/imagen8.jpeg' },
        { title: 'Documento 9', imageUrl: '../static/imagenes/imagen9.jpeg' },
        { title: 'Documento 10', imageUrl: '../static/imagenes/imagen10.jpeg' }
    ];
}

function validateAndSaveSettings(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const language = document.getElementById('language').value;

    let valid = true;

    if (username === '') {
        alert('El nombre de usuario no puede estar vacío.');
        valid = false;
    }
    else if (username.length < 3) {
        alert('El nombre de usuario debe tener al menos 3 caracteres.');
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        valid = false;
    }

    if (language === '') {
        alert('Por favor, selecciona un idioma.');
        valid = false;
    }

    if (valid) {
        alert('Configuraciones guardadas exitosamente.');
        clearSettings();
    }
}

function clearSettings() {
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('language').selectedIndex = 0;
}

function showDocumentDetails(doc) {
    showSection('detailsDocuments');
    document.querySelector('[data-title]').textContent = doc.title;
    document.querySelector('[data-author]').textContent = 'Autor Ejemplo';
    document.querySelector('[data-area]').textContent = 'Área Ejemplo';
    document.querySelector('[data-date]').textContent = '01/01/2022';
    document.querySelector('textarea').value = 'Descripción del documento.';
}
