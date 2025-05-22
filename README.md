# Frontend CMPC Libros

Este proyecto es un frontend en React + TypeScript creado con Vite para consumir el backend de libros y usuarios.

## Características principales

- Login de autenticación con JWT
- Listado de libros con filtros avanzados (género, editorial, autor, disponibilidad)
- Ordenamiento dinámico por múltiples campos
- Paginación del lado del servidor
- Búsqueda en tiempo real con debounce
- Formulario de alta/edición de libro con validación reactiva y carga de imagen
- Visualización de datos de un libro

## Scripts

- `yarn dev` — Levanta el servidor de desarrollo
- `yarn build` — Compila la app para producción
- `yarn preview` — Previsualiza la app compilada

## Estructura sugerida

- `/src/components` — Componentes reutilizables
- `/src/pages` — Vistas principales (login, libros, detalle, edición)
- `/src/api` — Lógica de conexión con el backend
- `/src/hooks` — Custom hooks (auth, debounce, etc)
- `/src/types` — Tipos TypeScript compartidos

## Requisitos

- Node.js >= 18
- Yarn

## Backend

Asegúrate de tener el backend corriendo y configurado para aceptar peticiones desde este frontend.
