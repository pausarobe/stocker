![SkyLab Coders](http://www.skylabcoders.com/images/403/default.png "SkyLabCoders")

[![JavaScript](https://github.com/Iggy-Codes/logo-images/blob/master/logos/js.png)](http://www.w3.org/)
[![React](https://github.com/MarioTerron/logo-images/raw/master/logos/react.png)](https://reactjs.org/)
[![HTML5 and CSS3](https://github.com/Iggy-Codes/logo-images/blob/master/logos/html5andcss3.png)](http://www.w3.org/)
[![ES6](https://github.com/Iggy-Codes/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/)
[![Bootstrap](https://github.com/Iggy-Codes/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)
[![MongoDB](https://github.com/Iggy-Codes/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
[![ExpressJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![NodeJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![npm](https://github.com/Iggy-Codes/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)
[![AJAX](https://github.com/Iggy-Codes/logo-images/blob/master/logos/ajax.png)](https://developer.mozilla.org/en-US/docs/AJAX/)
[![jQuery](https://github.com/Iggy-Codes/logo-images/blob/master/logos/jquery.png)](http://jquery.com/)
[![Mongoose](https://github.com/MarioTerron/logo-images/raw/master/logos/mongoose.png)](http://mongoosejs.com/)

# STOCKER

Stocker es un trabajo Full-Stack presentado como proyecto final del bootcamp de [SkyLabCoders Academy](http://www.skylabcoders.com/es/).

### Instalación

* Necesitas tener instalado el `NodeJS` con `npm`.
* Haz un clon de este proyecto: 
    `git clone https://github.com/pausarobe/stocker.git`


### Run

`$ npm start`

Todas las dependencias quedaran instaladas automáticamente.

### Motivación

Es un proyecto realizado a medida para la empresa de diseño de interiores [Danma](https://www.danma.es/). Trata de la gestión del stock de su almacén relacionado con las obras que tienen en curso.

### Construido con

* Front-end
    - React: 13.1.0
        + React-dom: 16.1.0
        + React-router-dom: 4.2.2
        + React-scripts: 1.0.17
    - Bootstrap: 3.3.5
    - jQuery: 1.12.4

* Back-end
    - Dotenv: 4.0.0
    - Body-parser: 1.18.2
    - Express: 4.16.2
    - Cors: 2.8.4
    - Axios: 0.17.1
    - MongoDB: 2.2.33
    - Mongoose: 4.13.2

### Funcionamiento

Para empezar nos aparecerá la pantalla de **Stock** la cual nos muestra todas las categorías de nuestro almacén.

![categorias](./images/categorias.png)

Entrando en una de ellas, nos aparecerán los **productos** específicos.

![productos](./images/productos.png)

En este apartado podemos crear un **Nuevo producto**, a su vez a los ya creados podremos **editarlos**, **eliminarlos** y **añadirlos** a la obra que queramos. Ejemplo:

![añadir](./images/añadir.png)

Al darle al botón de _Confirmar_ los productos elegidos se restaran de nuestro almacén e irán a la obra seleccionada.

En la sección **obras** las encontraremos diferenciadas por _en curso_ y _terminadas_ que podemos ir cambiándolas con los botones **finalizada/up**. Como en el apartado Stock también podremos **Crear**, **editar** y **eliminar** una obra. 

![obras](./images/obras.png)

Dentro de la obra veremos todos los productos que hemos ido enviando con anterioridad y un total del precio.

![pedropicapiedra](./images/pedropicapiedra.png)
