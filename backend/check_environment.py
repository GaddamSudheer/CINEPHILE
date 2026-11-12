
import sys
import fastapi
import uvicorn
import sqlalchemy
import psycopg
import pandas
import numpy
import sklearn
import httpx

print("CINEPHILE Python Environment")
print("-" * 35)
print("Python:", sys.version.split()[0])
print("FastAPI:", fastapi.__version__)
print("Pandas:", pandas.__version__)
print("NumPy:", numpy.__version__)
print("Scikit-learn:", sklearn.__version__)
print("SQLAlchemy:", sqlalchemy.__version__)
print("Psycopg:", psycopg.__version__)
print("HTTPX:", httpx.__version__)
print("\nAll imports successful!")
