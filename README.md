# Proyecto Lab — Índice de proyectos


Listado breve de las aplicaciones y su stack principal.


## 1. QuizAPP
**API de Cuestionarios básica**
Stack: *FastAPI | Pydantic | PostgreSQL | Uvicorn*
API para gestionar cuestionarios: creación de preguntas, opciones, sesiones de usuarios, y endpoints para obtener preguntas y validar respuestas. Pensada para ser ligera y fácil de integrar con frontends o servicios de testing.


---


## 2. TodoAPI
**API de Todos (CRUD)**
Stack: *FastAPI | Pydantic*
API REST simple para gestionar tareas (crear, leer, actualizar, eliminar). Ideal como ejemplo didáctico de autenticación básica, validación con Pydantic y paginación/filtrado.


---


## 3. SpotifyMusicRoom
**Django | React**
Stack: *Django (backend) | React (frontend)*
Aplicación colaborativa para reproducir música en grupo. Integra el API de terceros de Spotify para controlar reproducción, listas compartidas y votación de canciones entre participantes. Pensada para autenticación OAuth con Spotify y sincronización en tiempo real entre clientes.