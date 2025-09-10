# Backend-GoCar API

Este proyecto es un backend en Node.js/Express/TypeScript para la gestión de usuarios, autos y administración de la plataforma GoCar. Utiliza JWT para autenticación, roles, y permite subir imágenes de autos.

## Endpoints principales

### Auth

- **POST /api/auth/register**
  - Descripción: Registra un nuevo usuario.
  - Parámetros (body):
    - cedula (string)
    - nombres (string)
    - apellidos (string)
    - correo (string)
    - password (string)
    - rol (string)

- **POST /api/auth/login**
  - Descripción: Inicia sesión y devuelve un token JWT.
  - Parámetros (body):
    - correo (string)
    - password (string)

### Usuario

- **PUT /api/users/updateProfile**
  - Descripción: Actualiza el perfil del usuario autenticado.
  - Parámetros (body):
    - cedula (string)
    - nombres (string)
    - apellidos (string)
    - correo (string)
  - Requiere: Header `Authorization: Bearer <token>`

### Auto

- **POST /api/auto/add**
  - Descripción: Agrega un auto con imagen.
  - Parámetros (body/form-data):
    - imagen (file)
    - otros datos del auto
  - Requiere: Header `Authorization: Bearer <token>`

- **GET /api/auto/mis-autos/:cedula**
  - Descripción: Obtiene los autos de un usuario.
  - Parámetros (URL):
    - cedula (string)
  - Requiere: Header `Authorization: Bearer <token>`

- **PATCH /api/auto/vender/:id**
  - Descripción: Marca un auto como vendido.
  - Parámetros (URL):
    - id (string)
  - Requiere: Header `Authorization: Bearer <token>`

- **GET /api/auto/disponibles**
  - Descripción: Lista autos disponibles (público).

### Admin (solo rol admin)

- **POST /api/admin/register**
  - Descripción: Registra un usuario como admin.
  - Parámetros (body):
    - cedula, nombres, apellidos, correo, password, rol
  - Requiere: Header `Authorization: Bearer <token>` (rol admin)

- **POST /api/admin/getUser**
  - Descripción: Busca usuario por cédula.
  - Parámetros (body):
    - cedula (string)
  - Requiere: Header `Authorization: Bearer <token>` (rol admin)

- **DELETE /api/admin/deleteUser/:cedula**
  - Descripción: Elimina usuario por cédula.
  - Parámetros (URL):
    - cedula (string)
  - Requiere: Header `Authorization: Bearer <token>` (rol admin)

---

## Notas
- Todos los endpoints que modifican datos requieren autenticación con JWT.
- Los endpoints de admin requieren el rol admin.
- Para subir imágenes de autos, usa form-data con el campo `imagen`.

## Instalación y uso

1. Instala dependencias: `npm install`
2. Ejecuta en desarrollo: `npm run dev`
3. Ejecuta los tests: `npm test`
4. Compila para producción: `npm run build`

---

## Contacto
David-593
