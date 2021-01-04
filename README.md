# ML Backend

Test Práctico Backend.

## Requerimientos

Para desarrollo, necesitarás las siguientes herramientas instaladas:

- [Node.js](https://nodejs.org/es/)

### Instalaciones recomendadas

- [Postman](https://www.postman.com/)

### Editor de texto

El editor usado para desarrollar éste proyecto es: [Visual Studio Code](https://code.visualstudio.com/).

### Plugins recomendados

- HTML CSS Support
- JS-CSS-HTML Formatter
- Prettier – Code Formatter
- JavaScript (ES6) code snippets
- EsLint

---

## Instalaciones

### Node

[Node](http://nodejs.org/) es realmente fácil de instalar e incluye [NPM](https://npmjs.org/).
Debes ser capaz de ejecutar el siguiente comando después de completada la instalación.

    $ node --version
    v12.16.1

    $ npm --version
    6.13.4

#### Instalación de Node en OS X

Necesitarás usar la terminal. En OS X, por defecto, puedes encontrar la terminal en:
`/Applications/Utilities/Terminal.app`.

Por favor instala [Homebrew](http://brew.sh/) si no se completa la instalación con el siguiente comando:

    ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Si todo sale bien, deberías poder correr el siguiente comando:

    brew install node

#### Instalación de Node en Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Instalación de Node en Windows

Ingresa en [official Node.js website](http://nodejs.org/) & descarga el instalador.
También, debes asegurarte de tener `git` disponible en tu PATH, `npm` puede necesitarlo.

#### Actualiza las dependencias

Algunos paquetes pueden cambiar así que ejecuta `npm prune` & `npm install` de vez en cuando.

Una forma común de actualizar es haciendo:

    git pull
    npm prune
    npm install

Para ejecutar estos tres comandos al tiempo:

    npm run pull

---

## Instalación

Para instalar el proyecto, debes seguir los siguientes pasos:

    git clone https://github.com/Alula96/ML-backend.git
    cd ML-backend
    npm install

---

## Ejecuta el servidor

Para ejecutar el proyecto, debes escribir en consola:

    npm start

---

## Ejecución de pruebas

Para ejecutar las pruebas del proyecto, debes ejecutar en consola:

    jest

---

## ¿Qué se encuentra dentro?

### Estructura de carpetas

Una mirada a los archivos y directorios de nivel superior que verá en este proyecto.

```
    .
    ├── __test__/
    ├── node_modules/
    ├── src/
    |   ├── controllers/
    |   ├── models/
    |   ├── routes/
    |   └── services/
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
```

1. **`/test`**: contiene los archivos para ejecutar las pruebas.

2. **`/node_modules`**: Guarda los módulos de código de los que depende su proyecto (paquetes npm) que se instalan automáticamente.

3. **`/src`**: Este directorio contiene todo el código relacionado con lo que se podrá solicitar al back-end. `src` es una convención para "source code".

    1. **`/controllers`**: Guarda los controladores de la aplicación que servirán para orquestar las llamadas de los servicios y qué datos serán retornados al usuario.

    2. **`/models`**: Guarda clases representen objetos de datos que se puedan usar para transferir datos en la aplicación.

    3. **`/routes`**: Guarda las rutas que tendrá la aplicación, lo único que debe hacer es juntar las funciones de los controladores con las rutas esperadas.

    4. **`/services`**: Guarda los servicios de la aplicación; debería cotener la mayor cantidad de lógica de negocio: Logica que encapsula los requerimientos del negodio, como llamadas a capas de acceso de datos o modelos así como la utilización de API's externos a la aplicación.

    5. **`/utils`**: Guarda funciones y clases que pueden ser usadas de forma transversal en el aplicativo.

4. **`.gitignore`**: Este archivo le dice a git para qué archivos no debe rastrear / no mantener un historial de versiones.

5. **`angular.json`**: Los valores predeterminados de configuración de CLI para todos los proyectos en el espacio de trabajo, incluidas las opciones de configuración para compilar, servir y probar herramientas que utiliza la CLI, como [TSLint](https://palantir.github.io/tslint/), [Karma](https://karma-runner.github.io/), y [Protractor](http://www.protractortest.org/). Para más detalles, ver [Angular Workspace Configuration](https://angular.io/guide/workspace-config).

6. **`package-lock.json`** (Ver `package.json` a continuación, primero). Este es un archivo generado automáticamente basado en las versiones exactas de sus dependencias npm que se instalaron para su proyecto. **(No cambiará este archivo directamente).**

7. **`package.json`**: Un archivo de manifiesto para proyectos de Node.js, que incluye cosas como metadatos (el nombre del proyecto, el autor, etc.). Este manifiesto es cómo npm sabe qué paquetes instalar para su proyecto.

8. **`README.md`**: Archivo de texto que contene información de referencia útil sobre el proyecto.

---
