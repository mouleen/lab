from sqlalchemy import Boolean, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Questions(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, index=True)
    question_text = Column(String, index=True)

    def serialize(self):
        return {
            "id": self.id,
            "question_text": self.question_text
        }

class Choices(Base):
    __tablename__ = "choices"
    id = Column(Integer, primary_key=True, index=True)
    choice_text = Column(String, index=True)
    is_correct = Column(Boolean, default=False)
    question_id = Column(Integer, ForeignKey("questions.id"))

    def serialize(self):
        return {
            "id":self.id,
            "choice_text":self.choice_text,
            "is_correct": self.is_correct,
            "question_id": self.question_id
        }
