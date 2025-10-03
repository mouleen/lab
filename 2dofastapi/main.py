from typing import Optional,List
from fastapi import FastAPI
from pydantic import BaseModel, Field
from enum import IntEnum
from fastapi import HTTPException

api = FastAPI(
    title="Todo API",
    description="API for managing todos with FastAPI",
    version="1.0.0"
)

class Priority(IntEnum):
    LOW = 1
    MEDIUM = 2
    HIGH = 3

class TodoBase(BaseModel):
    id: Optional[int] = Field(default=None, description="The unique identifier of the todo")
    title: str = Field(..., description="The title of the todo", max_length=512, min_length=3)
    completed: bool = Field(default=False, description="Indicates if the todo is completed")
    priority: Priority = Field(default=Priority.LOW, description="The priority of the todo")

class TodoCreate(TodoBase):
    title: str = Field(..., description="The title of the todo", max_length=512, min_length=3)

class TodoUpdate(TodoBase):
    title: Optional[str] = Field(None, description="The title of the todo", max_length=512, min_length=3)
    completed: Optional[bool] = Field(None, description="Indicates if the todo is completed")
    priority: Optional[Priority] = Field(None, description="The priority of the todo")

class Todo(TodoBase):
    id: int = Field(..., description="The unique identifier of the todo")


all_todos= [
    Todo(id=1, title="Buy groceries", completed=False, priority=Priority.LOW),
    Todo(id=2, title="Read a book", completed=True, priority=Priority.MEDIUM),
    Todo(id=3, title="Walk the dog", completed=False, priority=Priority.HIGH),
    Todo(id=4, title="Finish homework", completed=False, priority=Priority.MEDIUM),
    Todo(id=5, title="Clean the house", completed=True, priority=Priority.LOW),
    Todo(id=6, title="Prepare dinner", completed=False, priority=Priority.HIGH)
]

@api.get("/")
async def root():
    return {"message": "Hello World"}

@api.get("/getdata")
async def get_data():
    return {"data": "Here you return info generated with data you get from asynchronous repositories"}

@api.get("/todo/{todo_id}", response_model=Todo)
def get_todo(todo_id: int):
    todo = next((todo for todo in all_todos if todo.id == todo_id), None) #  find the todo by id
    if todo:
        return todo
    raise HTTPException(status_code=404, detail="Todo not found")



@api.get("/todos",response_model=List[Todo])
def get_todos(first_n: int = None):
    if first_n:
        return all_todos[:first_n]
    return all_todos

@api.post("/todo", response_model=Todo)
def create_todo(todo: TodoCreate):
    new_todo = Todo(
        id=max(todo.id for todo in all_todos) + 1,
        title=todo.title,
        completed=todo.completed,
        priority=todo.priority
    )
    all_todos.append(new_todo)
    return new_todo


@api.put("/todo/{todo_id}", response_model=Todo)
def update_todo(todo_id: int, updated_todo: TodoUpdate):
    todo = next((todo for todo in all_todos if todo.id == todo_id), None)
    if todo:
        todo.title = updated_todo.title if updated_todo.title is not None else todo.title
        todo.completed = updated_todo.completed if updated_todo.completed is not None else todo.completed
        todo.priority = updated_todo.priority if updated_todo.priority is not None else todo.priority
        return todo
    raise HTTPException(status_code=404, detail="Todo not found")

@api.delete("/todo/{todo_id}", response_model=Todo)
def delete_todo(todo_id: int):
    global all_todos
    length_before = len(all_todos)
    todo = next((todo for todo in all_todos if todo.id == todo_id), None)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")

    # Filter out the todo with the specified ID
    all_todos = [todo for todo in all_todos if todo.id != todo_id]
    return todo


@api.get("/todos/priority/{priority}", response_model=List[Todo])
def get_todos_by_priority(priority: Priority):
    return [todo for todo in all_todos if todo.priority == priority]
