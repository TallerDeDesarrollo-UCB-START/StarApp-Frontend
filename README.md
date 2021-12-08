# StarApp-Frontend

# Crear una App [![Build Status](https://dev.azure.com/facebook/create-react-app/_apis/build/status/facebook.create-react-app?branchName=main)](https://dev.azure.com/facebook/create-react-app/_build/latest?definitionId=1&branchName=main) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/blob/main/CONTRIBUTING.md)

<img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="20%" />


## Comandos para instalar

```sh
Abrir una ventana de comandos CMD
Ejecutar los siguientes comandos para verificar la instalación
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
    Axios
    CSS
    Javascript
    final-form
    xlsx
    date-fns
    country-list-spanish
    
    react-export-excel
    react-hook-form v7
    reactstrap
    
# Estructura de Carpetas y Folders
- build

- node modules

- public

- src

    - **assets e images**: Imágenes necesarias, como las insignias, el logo del proyecto. Aquí se colocan las imágenes necesarias.

    - **components**: El proyecto está organizado por componentes, en los components se pueden colocar los archivos de las cuales está conformado el proyecto.
        - **componentes proyectos**: (ordenadas de mayor a menor tamaño)
               - paginas: Este folder contiene las vistas de las páginas de proyectos dependiendo del rol.
               - organismos: Este folder contiene varios archivos que se pueden dividir en el Body y el Header de cada página dependiendo del rol. También se tiene "PuertaPermisos" que gestiona los accesos a los usuarios dependiendo del rol.
               - moleculas: Este folder contiene todos los archivos que contienen los organismos como ser los Banners de cada vista, el contenido de los mismos, los formularios de crear y editar, entre otros.
               - atomos: Este folder contiene los componentes más pequeños como ser los botones.
        - **CrearEvento**: Este folder contiene el componente "crearEvento.jsx" y el estilo del componente.
        - **footer**: el footer inicial actualmente no usado
        - **Formulario-evento.component**: Este folder contiene los archivos para el componente del Formulario de Crear Evento, que también es reutilizado en el Formulario de Editar Evento.
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
 
 # Breve explicacion para el agregado de nueva funcionalidad
    **Proyectos**
    En el caso de que se quiera implementar un nuevo procedimiento, se debe tomar en cuenta la funcionalidad que será implementada y que rol de usuario podrá tener acceso a ella.
    Por ejemplo, se conoce que el Core team tiene el acceso total a la aplicación al ser un superusuario dentro de la misma, 
    el Líder tiene acceso al CRUD de Eventos pero no al de Proyectos y
    el Voluntario únicamente tiene acceso a poder ingresar a la aplicación para participar dentro de los eventos y proyectos existentes. 
    Por este motivo, se creó la Puerta de Permisos.
    Como primer componente se debe crear el "atomo" a utilizar.
    Este átomo se pasa por medio de import a las "moleculas".
    Las moleculas reciben el atomo, y son llamadas a los "organismos".
    Los organismos son llamadas a las páginas.
    
    **Eventos**
    Crear un nuevo componente con la extensión ".jsx" y se llama en el archivo "EventsList.js"
