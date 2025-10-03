<h1 align="center">SpotifyMusicRoom </h1>
<h3 align="center">Django| React | PostgreSQL </h3>

<p align="left">
Aplicación colaborativa para reproducir música en grupo. Integra el API de terceros de Spotify para controlar reproducción, listas compartidas y votación de canciones entre participantes. Pensada para autenticación OAuth con Spotify y sincronización en tiempo real entre clientes.
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> </p>
<p align="left">
  <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" alt="django" width="40" height="40"/>
  </a>
</p>
<p align="left">
  <a href="https://react.dev/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40"/>
  </a>
</p>


<h1 align="center">Preparar el entorno</h1>

# 🐍 Proyecto Python en Entorno Virtual

Este proyecto está configurado para usar un **entorno virtual de Python** 
---

## ✅ Requisitos previos

- [Python 3](https://www.python.org/downloads/) (en macOS se recomienda instalarlo con [Homebrew](https://brew.sh/))

---

## 📦 Comandos disponibles

### 🔹 Crear el entorno virtual
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install django djangorestframework
```

---

### 🔹 Instalar dependencias
Si tenés un archivo `requirements.txt`, instalá todas las librerías necesarias con:
```bash

#API
pip install -r requirements.txt

#Frontend
npm init -y
npm i webpack webpack-cli --save-dev
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
npm i react react-dom --save-dev
npm i @mui/material @mui/icons-material --save-dev
npm install @babel/plugin-proposal-class-properties --save-dev
npm install react-router-dom --save-dev
```

---

### 🔹 Activar el entorno virtual
Cada vez que abras una nueva terminal y quieras trabajar en el proyecto:
```bash
#API
source .venv/bin/activate
```

---

### 🔹 Guardar dependencias
Cuando instales nuevas librerías dentro del entorno, guardalas en `requirements.txt`:
```bash
#API
pip freeze > requirements.txt
```

---

<h1 align="center">Preparar el entorno</h1>

# 🐍 Proyecto Python con FastAPI SQLAlchemy PostgreSQL y Uvicorn

Para inciar el proyecto para pruebas

```bash
#Frontend
cd frontend && npm run dev 
#API
cd api && python manage.py runserver 0.0.0.0:8001
```

## ✅ Documentación

- [SpotifyMusicRoom](http://localhost:8001/api/docs/) 

---

## ✅ Caracteristicas técnicas

- 
- 
- 
- 
- 
- 
- 
- 





