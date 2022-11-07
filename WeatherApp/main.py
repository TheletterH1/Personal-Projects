from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
SQLALCHEMY_DATABASE_URL = os.environ['SQLALCHEMY_DATABASE_URL']
engine = create_engine(
   SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

