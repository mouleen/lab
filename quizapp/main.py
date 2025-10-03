from fastapi import FastAPI,HTTPException,Depends
from pydantic import BaseModel
from typing import List,Annotated
import models
from database import engine,SessionLocal
from sqlalchemy.orm import Session
from fastapi.responses import JSONResponse

app=FastAPI()
models.Base.metadata.create_all(bind=engine) # Crea the tablas y Base de datos en PostgreSQL

class ChoiceBase(BaseModel):
    choice_text:str
    is_correct:bool

class QuestionBase(BaseModel):
    question_text:str
    choices:List[ChoiceBase]

def get_db():
    db=SessionLocal() 
    try:
        yield db # yield the database session
    finally:
        db.close() # close the database session

db_dependency=Annotated[Session,Depends(get_db)]

@app.post("/questions/")
async def create_question(question:QuestionBase,db:db_dependency):
    db_question=models.Questions(question_text=question.question_text)
    db.add(db_question)
    db.commit()
    db.refresh(db_question)

    for choice in question.choices:
        db_choice=models.Choices(choice_text=choice.choice_text,is_correct=choice.is_correct,question_id=db_question.id)
        db.add(db_choice)
    
    db.commit()
    return {"message":"Question created successfully","question_id":db_question.id}

@app.get("/questions")
async def get_questions(db:db_dependency):
    db_questions=db.query(models.Questions).all()
    if not db_questions:
        raise HTTPException(status_code=404,detail="No questions found")
    
    # Aramamos la respuesta
    response={
        "msg": f"Listado de preguntas: {len(db_questions)}",
        "ok": True,
        "data": [db_question.serialize() for db_question in db_questions]
    }
    return response,200

@app.get("/questions/{question_id}")
async def get_question(question_id:int,db:db_dependency):
    db_question=db.query(models.Questions).filter(models.Questions.id == question_id).first()
    if not db_question:
        raise HTTPException(status_code=404,msg="Question not found",ok=False)

    response={
        "msg": f"Pregunta id: {question_id}",
        "ok": True,
        "data": db_question.serialize()
    }
    return response,200

@app.get("/choices/{question_id}")
async def get_choices(question_id:int,db:db_dependency):
    db_choices = db.query(models.Choices).filter(models.Choices.question_id == question_id).all()
    if not db_choices:
        raise HTTPException(status_code=404,msg="Sin Opciones")
    response={
        "msg":f"Opciones de la pregunta :{question_id}",
        "ok":True,
        "data": [db_choice.serialize()for db_choice in db_choices]
    }
    return response,200