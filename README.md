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

Rama de Desarrollo donde ver: **development**

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
