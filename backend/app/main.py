from fastapi import FastAPI #import la clase principal
from fastapi.middleware.cors import CORSMiddleware #permite que otras apps
from routes import router #importamos las rutas

app = FastAPI() #creamos una instancia de la clase principal

# creamos el filtro de seguridad
app.add_middleware (
    CORSMiddleware,
    allow_origins=["*"], #permitimos que el front se conecte
    allow_credentials=True, #permitimos que se envien credenciales
    allow_methods=["*"], #permite todos los metodos
    allow_headers=["*"] #permite todos los encabezados
)

app.include_router(router)
# le decimos que use todas las rutas que se encuentran en el router creado