<h1 align="center">API de Questionarios </h1>
<h3 align="center">FastAPI | Pydantic | PostgreSQL Repository</h3>

<p align="left">
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> </p>

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
pip install fastapi sqlalchemy psycopg2-binary uvicorn
```

---

### 🔹 Instalar dependencias
Si tenés un archivo `requirements.txt`, instalá todas las librerías necesarias con:
```bash
pip install -r requirements.txt

```

---

### 🔹 Activar el entorno virtual
Cada vez que abras una nueva terminal y quieras trabajar en el proyecto:
```bash
source .venv/bin/activate
```

---

### 🔹 Guardar dependencias
Cuando instales nuevas librerías dentro del entorno, guardalas en `requirements.txt`:
```bash
pip freeze > requirements.txt
```

---

<h1 align="center">Preparar el entorno</h1>

# 🐍 Proyecto Python con FastAPI SQLAlchemy PostgreSQL y Uvicorn

Para inciar el proyecto para pruebas

```bash
uvicorn main:app --reload
```

<h1 align="center">Documentacion</h1>

## ✅ Docuemntación

- [QuestionAPI](http://localhost:8000/docs/) 

---

## ✅ Caracteristicas técnicas

- Asynchronous VS Synchronous
- Path Parameters
- Query Parameters
- POST Endpoint
- Automatic Documentation (Swagger UI)
- PUT & DELETE Endpoints
- Pydantic Schemas & Validation
- HTTPExceptions





