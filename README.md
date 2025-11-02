> ⚠️ **IMPORTANTE:**  
> Los archivos `.env` fueron incluidos intencionalmente en este repositorio con el propósito de **facilitar la ejecución y prueba técnica de la aplicación**.  
> En un entorno de producción, estos archivos **no deberían subirse** por motivos de seguridad.

> En algunos puntos use IA **Para el diseño de la targeta, el input Fecha de vencimiento y RegEx.**

> Pantalla inicial
<img width="1920" height="876" alt="image" src="https://github.com/user-attachments/assets/5e0eadf1-e9a8-4d4b-a60d-a8e81864d34f" />

> Listado de targetas
<img width="1920" height="870" alt="image" src="https://github.com/user-attachments/assets/279add65-896e-4209-b8a9-6f70cded72e7" />


## Prueba tecnica

## 🚀 Tecnologías utilizadas

- **Lenguaje**: Python 3.10
- **Framework Backend**:  Django 5.2.1 + Django Rest Framework 3.14.0
- **Framework Frontend**:  React Vite 19.1.1
- **Base de datos**: SQLite
- **Autenticación**: No
- **Documentación API**: Swagger o Postman

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/JordinRosario/prueba_tecnica_sii.git
cd prueba_tecnica_sii
```

2. Crea y activa el entorno virtual:

```bash
python -m venv env
source env/bin/activate  # Windows: env\Scripts\activate
```

3. Instala dependencias:

```bash
pip install -r requirements.txt
```


5. Ejecuta migraciones y carga datos iniciales (si aplica):

```bash
    python manage.py migrate
```

6. Realizar el build del frontend:

```bash
    cd frontend/
    npm i 
    npm run build
    npm run dev # en caso de que quiera alzar el servidor de frontend (http://localhost:5173/static/)
```

6. Inicia el servidor:

```bash
    python manage.py runserver
```

## 📱 Endpoints principales

| Método | Endpoint               | Descripción                         |
| ------ | ---------------------- | ----------------------------------- |
| GET    | /static/               | Interfaz de usuario                 |
| GET    | /api/docs/swagger/     | Ver todos los endpoints             |
| GET    | /api/docs/redoc/       | Vista endpoint para no tecnicos     |
| GET    | /admin/                | Panel de administración             |


## 👨‍💼 Desarrollado por

**Jordin Rosario**\
Contacto: [jordinjose2003@gmail.com]\
WhatsApp: [809-665-9058]
