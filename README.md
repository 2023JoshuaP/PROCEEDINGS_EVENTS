# Proyecto de Página Web de Proceedings de Eventos

Este proyecto es una aplicación web desarrollada en Flask y MongoEngine para gestionar los proceedings de eventos.

## Requisitos Previos

- Python 3.6 o superior
- pip (gestor de paquetes de Python)

## Creación y Activación de un Entorno Virtual

### En Windows

1. Abre una terminal (cmd, PowerShell, o Git Bash).
2. Navega al directorio del proyecto.
3. Crea un entorno virtual con el siguiente comando:

    ```bash
    python -m venv .venv
    ```

4. Activa el entorno virtual:

    ```bash
    .\.venv\Scripts\activate
    ```

### En Linux/MacOS

1. Abre una terminal.
2. Navega al directorio del proyecto.
3. Crea un entorno virtual con el siguiente comando:

    ```bash
    python3 -m venv env
    ```

4. Activa el entorno virtual:

    ```bash
    source env/bin/activate
    ```

## Instalación de Requerimientos

Una vez que el entorno virtual esté activado, instala los paquetes necesarios usando el archivo `requirements.txt`.

1. Asegúrate de estar en el directorio del proyecto y que el entorno virtual esté activado.
2. Ejecuta el siguiente comando:

    ```bash
    pip install -r requirements.txt
    ```

Esto instalará Flask, MongoEngine y todas las demás dependencias necesarias para el proyecto.

## Laboratorio 9 - Clean Code

- **Prácticas usadas de Clean Code (JavaScript)**

1. Como primera práctica de Clean Code es nombres claros y descriptivos, las funciones y las variables tienen una responsabilidad única cllaramente definida. Por ejemplo: **hideAllSections** tiene la función única de ocultar todas las secciones y **showSection** se encarga de mostrar una sección específica.

2. Como segunda práctica es evitar la duplicación del código, se evita la duplicación de código al momento de reutilizar las funciones de **hideAllSections** y de **ShowSection** en lugar de tener lógica duplicada.

3. Como tercera práctica es usar nombres explicativos, usar los nombres explicativos ayuda al entendimiento de cada parte del código sin necesidad de comentarios adicionales.

- **Reporte de SonarLint**

[{
	"resource": "/d:/Software/PROCEEDINGS_EVENTS/templates/viewDocuments.html",
	"owner": "sonarlint",
	"code": "Web:S5254",
	"severity": 4,
	"message": "Add \"lang\" and/or \"xml:lang\" attributes to this \"<html>\" element",
	"source": "sonarlint",
	"startLineNumber": 2,
	"startColumn": 1,
	"endLineNumber": 2,
	"endColumn": 7
}]

Add "lang" and/or "xml:lang" attributes to this "<html>" element

[{
	"resource": "/d:/Software/PROCEEDINGS_EVENTS/static/css/styles.css",
	"owner": "sonarlint",
	"code": "css:S4666",
	"severity": 4,
	"message": "Unexpected duplicate selector \".sidebar\", first used at line 5",
	"source": "sonarlint",
	"startLineNumber": 76,
	"startColumn": 1,
	"endLineNumber": 76,
	"endColumn": 12
}]

Unexpected duplicate selector ".sidebar", first used at line 5

[{
	"resource": "/d:/Software/PROCEEDINGS_EVENTS/templates/viewDocuments.html",
	"owner": "sonarlint",
	"code": "Web:S6844",
	"severity": 4,
	"message": "Anchor tags should not be used as buttons.",
	"source": "sonarlint",
	"startLineNumber": 12,
	"startColumn": 17,
	"endLineNumber": 12,
	"endColumn": 68
},{
	"resource": "/d:/Software/PROCEEDINGS_EVENTS/templates/viewDocuments.html",
	"owner": "sonarlint",
	"code": "Web:S6844",
	"severity": 4,
	"message": "Anchor tags should not be used as buttons.",
	"source": "sonarlint",
	"startLineNumber": 13,
	"startColumn": 17,
	"endLineNumber": 13,
	"endColumn": 68
}]

Anchor tags should not be used as buttons.
Anchor tags should not be used as buttons.

## Laboratorio 10 - SOLID

Los principios solid usados son los siguientes

1. **Single Responsibility Principle**

Se establece que una clase debe tener una sola responsabilidad o razón para cambiar.

	```plaintext
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
	```

2. **Open/Closed Principle**

Se establece que las entidades de software deben estar abiertas para la extensión, pero cerradas para la modificación.

	```plaintext
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
	```

3. **Dependency Inversion Principle**

Se establece que las clases de alto nivel no deben depender de clases de bajo nivel, ambas deben depender de abstracciones.

	```plaintext
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

		function loadDocumentImages(sectionId, page = 1, pageSize = 5) {
			const section = document.getElementById(sectionId);
			const documentsGrid = section.querySelector('.documents-grid');
			documentsGrid.innerHTML = '';

			const documents = getDocuments(); // Abstracción de la fuente de datos
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
		```