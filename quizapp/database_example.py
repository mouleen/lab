# Requerimientos para inciar
# Renombra este fichero a database.py y configura tu DB PostgreSQL

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

URL_DATABASE = "postgresql://USR:PWD@localhost:5432/QuizApp"
engine= create_engine(URL_DATABASE)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
