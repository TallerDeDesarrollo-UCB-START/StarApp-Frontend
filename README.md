# StarApp-Frontend

# Crear una App [![Build Status](https://dev.azure.com/facebook/create-react-app/_apis/build/status/facebook.create-react-app?branchName=main)](https://dev.azure.com/facebook/create-react-app/_build/latest?definitionId=1&branchName=main) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/blob/main/CONTRIBUTING.md)

<img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="20%" />


## Comandos para instalar

```sh
Abrir una ventana de comandos CMD
Ejecutar los siguientes comandos para verificar la instalacion
    node --version
    npm --version
Crear un proyecto con React Js
    npx create-react-app "Nombre de la aplicacion"
Abrir Visual studio Code y ejecutar el siguiente comando
    npm start
Comandos adicionales crear evento 
    npm i react-router-dom
    npm i reactstrap
```

# Tecnologías usadas

    Material-ui v4.
    React
    Firebase
    axios
    CSS
    Javascript
    final-form
    xlsx
    date-fns
    country-list-spanish
    ... (grupo 1 y 3)


# Estructura de Carpetas y Folders
- build

- node modules

- public

- src

    - **assets e images**: Imagenes necesarias, como las insignias, el logo del proyecto. Aqui se colocan las imagenes necesarias.

    - **components**: El proyecto esta organizado por componentes, en los components se pueden colocar los archivos de las cuales esta conformado el proyecto.
        - **componentes proyectos**: (grupo 1)
        - **CrearEvento**: (grupo 3)
        - **footer**: el footer inicial actualmente no usado
        - **Formulario-evento.component**: (grupo 3)
        - **Header**: 
            - header.jsx: contiene el componente principal de header
        - **Home**: 
            - Home.jsx: componente principal que contiene los demas componentes, home presenta LandingView si no se esta loggeado o EventosProximos en caso contrario
        - **Perfil**: Folder que contiene las 3 secciones presentes en la vista de Cuenta
        - **templates**: Este folder contiene algunos componentes altamente rehusables
        - **UserTable**: Users.ksx es el componente principal que contiene los otros componentes
    - **routes**
        - **routes** : definición de objeto que relaciona todos los componentes con una ruta
        - **AuthRoutesVerifier**: archivo que alberga funciones de verificación en las rutas
    - **screens:** Algunas de los componentes que se asocian con una ruta en routes
    - **initializer.js:** archivo de configuración para conexión con api de inicio de sesión con google
- .env
- package.json
- README.md

# Arquitectura de software
    El front esta basado en React el framework que elegimos este semestre.
    React maneja una arquitectura Llamada Flux, que es similar a MVC ya que también contiene , su modelo, vista y controladores pero esta pensada en un flujo de datos unidireccional. Los datos viajan desde la vista por medio de acciones y llegan a un Store desde el cual se actualizará la vista de nuevo.
    La Store sería lo más parecido al modelo de la aplicación. Guarda los datos y estado de la aplicación.
    No hay métodos en la Store que permitan modificar los datos en ella, eso se hace a través de dispatchers y acciones. 
    React utiliza JSX que permite incrustar etiquetas XML/HTML en el archivo de JavaScript, esto implica que JSX es una extensión de sintaxis para JavaScript es decir que en el mismo archivo JSX esistira codigo html javaScript y tambien css. Se tiene que usar un compilador como Babel, que recoge nuestro código JSX y lo compila para generar JavaScript que los navegadores puedan entender.