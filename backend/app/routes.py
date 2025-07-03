from fastapi import APIRouter #Sistema de rutas
from data import nombres #del data.py los nombres

router = APIRouter() #creamos un objeto para poder definir las rutas

@router.get("/nombres") #definimos una ruta (o endpoint)

def get_nombre(): #ejecuta cuando alguien use el nombres
    return nombres #retornamos la lista de nombres

#seccionar las rutas que tenemos y no amontonar todo en el main

