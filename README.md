# **LOS 4 APÓSTOLES**
---

## Índice

1. [Descripción](#descripción)
2. [Instalación](#instalación)
3. [Uso](#uso)
4. [Secciones](#secciones)
5. [Características](#características)
6. [Contribución](#contribución)
7. [Roadmap](#roadmap)
8. [Datamodel](#datamodel)
9. [Tecnología](#tecnología)
10. [Autores](#autores)
11. [Agradecimientos](#agradecimientos)

---

## Descripción

## Secciones y datos
- Home
- Galería (descripcion del edificio y de los 4 apostoles) (Javi)
    - Room {
        id: number, 
        name: string,
        category: string, 
        size: number
    }
    
- Artist(aqui van todos los artistas)(NURIA) {
        id: number, 
        name: string,
        description:string, 
        image: string
    }
- Exposición (aqui se van a mostrar todas las obras) (Pepi)
    - Pictures {
        id: number,
        name: string,
        autor: string,
        year: number,
        descripción: string,
    }
    
- Tecnología
    - Fronted: {React}
    - Backend: {Express }
    - Base de Datos: {MongoDB}
    - Herramientas: {Git}



## Uso


<<<<<<< HEAD

=======
   ```bash
# Ejecutar el proyecto desde la parte api
npm run dev
```
Mensaje que se recibira es API is running at http://localhost:3000 MongoDB conectado correctamente
```bash
# Ejecutar el proyecto desde la parte app
npm run dev
```
**<font color = "red">El mensaje recibido sera El frontend iniciará en http://localhost:5173 (Vite)</font>**

---

## Características

Lista las características principales:

- 🧑‍🎨 Listar artistas de diferentes caracteristicas y estilos, que permite añadir , modificar y eliminar de su listado principal.
- 🖼️ Listar obras de artes y esculturas de diferentes caracteristicas y estilos, que permite añadir , modificar y eliminar de su listado principal.
- 🏪 Listar, añadir, eliminar y modificar las diferentes salas de la galería.

---

## Contribución

 Contribuir  en este proyecto.

1. Haz un fork del repositorio.

2. Haz commit de tus cambios:
   ```bash
   git commit -m "Añadida nueva característica"
   
3. Envía tus cambios al repositorio original:
   ```bash
   git push origin nueva-caracteristica
   ```
4.  Abre un pull request.



---

## Roadmap

Planes futuros de tu proyecto:

-  Instalacion de Formulario de contacto.
-  Mejora de diseño de la web.
-  Ampliación de las secciones de la galería.

---

## Datamodel


### artists.model.js
- name: { type: String, required: true},
- description: {type: String, required: true},
- image: { type: String, required: false}
- id (object id, required, unique)

### gallery.model.js
- name: { type: String, required: true},
- image: { type: String, required: true },
- description: { type: String, required: true },

### picture.model.js
- name: {type: String, required: true},
- author: {type: String, required: true},
- year: {type: Number, required: false},
- imageUrl: {type: String, required: true},
- description: {type: String, required: false}

---
## Tecnología

### Frontend
- React - Librería de UI
- JavaScript (ES6+) - Lenguaje de programación
- HTML5 & CSS3 - Estructura y estilos
- Herramientas de Desarrollo
- Postman - Testing de API
- Git - Control de versiones
- npm - Gestor de paquetes

### Backend

- Node.js - Entorno de ejecución
- Express.js - Framework web
- MongoDB - Base de datos NoSQL
- Mongoose - ODM para MongoDB
- CORS - Manejo de peticiones entre dominios
- dotenv - Variables de entorno

---

---

## Autores
- Pepi Alarcón (Pagina Picture)
- Javier Vera (Pagina Gallery)
- Nuria Garay (Pagina Artistas)

## Agradecimientos

A los tutores de este Bootcamp.
>>>>>>> 262454e1d4b15fed386301bcc00ad73da19129ba
