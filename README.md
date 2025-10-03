# Proyectos Testing Lab — Índice

<p align="left">
  <a href="https://www.python.org" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/>
  </a>
  <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" alt="django" width="40" height="40"/>
  </a>
  <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" alt="fastapi" width="40" height="40"/>
  </a>
  <a href="https://react.dev/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40"/>
  </a>
  <a href="https://pydantic-docs.helpmanual.io/" target="_blank" rel="noreferrer">
    <img src="https://avatars.githubusercontent.com/u/110818415?s=48&v=4" alt="pydantic" width="40" height="40"/>
  </a>
  <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="postgresql" width="40" height="40"/>
  </a>
  <a href="https://uvicorn.dev/" target="_blank" rel="noreferrer">
    <img src="https://uvicorn.dev/uvicorn.png" alt="uvicorn" width="40" height="40"/>
  </a>
</p>

Listado breve de las aplicaciones y su stack principal.


## 1. [QuizAPP](https://github.com/mouleen/lab/tree/main/quizapp) 
**API de Cuestionarios básica**
Stack: *FastAPI | Pydantic | PostgreSQL | Uvicorn*
API para gestionar cuestionarios: creación de preguntas, opciones, sesiones de usuarios, y endpoints para obtener preguntas y validar respuestas. Pensada para ser ligera y fácil de integrar con frontends o servicios de testing.


---


## 2. [TodoAPI](https://github.com/mouleen/lab/tree/main/2dofastapi) 
**API de Todos (CRUD)**
Stack: *FastAPI | Pydantic*
API REST simple para gestionar tareas (crear, leer, actualizar, eliminar). Ideal como ejemplo didáctico de autenticación básica, validación con Pydantic y paginación/filtrado.


---


## 3. [SpotifyMusicRoom](https://github.com/mouleen/lab/tree/main/django_music_app/music_controller)
**Django | React**
Stack: *Django (backend) | React (frontend)*
Aplicación colaborativa para reproducir música en grupo. Integra el API de terceros de Spotify para controlar reproducción, listas compartidas y votación de canciones entre participantes. Pensada para autenticación OAuth con Spotify y sincronización en tiempo real entre clientes.
