# 📌 ABOGESTIO

El proyecto consiste en el desarrollo de un aplicativo web orientado a abogados y firmas jurídicas, con el objetivo de optimizar la búsqueda, gestión y organización de documentos legales. Esta herramienta permite llevar un control digital de los casos de forma sencilla y segura, facilitando la subida, descarga y administración de archivos. La solución responde a la necesidad de modernizar procesos que tradicionalmente se han realizado en papel, lo cual implica riesgos de pérdida de información y una gestión poco eficiente.

---

## 📁 Índice

1. [Tecnologías usadas](#tecnologías-usadas)
2. [Instalación del proyecto](#instalación-del-proyecto)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Base de datos](#base-de-datos)
5. [Rutas y Endpoints](#rutas-y-endpoints)
6. [Scripts disponibles](#scripts-disponibles)
7. [Autor y licencia](#autor-y-licencia)

---

## 🚀 Tecnologías usadas

**Tecnologias utilizadas**

- Node.js
- Express 5
- PostgreSQL
- JSON Web Tokens (JWT)
- bcryptjs
- dotenv
- cors
- express-validator
- pg-promise

## ⚙️ Instalación del proyecto

1. Clonar Repositorio

```bash
git clone https://github.com/Dan52w/abogestion-back
cd back
```
2. Instalar dependencias

```bash
npm install
```

```bash
npm i cors
npm i express
npm i morgan
npm i pg-promise
npm i express-validator
npm i bcryptjs
npm i jsonwebtoken

| Paquete              | Función principal                                                |
|----------------------|------------------------------------------------------------------|
| **express**          | Framework para construir el servidor web.                        |
| **cors**             | Permite peticiones desde otros orígenes.                         |
| **morgan**           | Registra solicitudes HTTP en consola (logging).                  |
| **bcryptjs**         | Cifrado de contraseñas para autenticación segura.                |
| **jsonwebtoken**     | Generación y validación de tokens JWT.                           |
| **express-validator**| Validación de datos de entrada en las rutas.                     |
| **pg-promise**       | Conexión y consulta a base de datos PostgreSQL.                  |
```

Librerias del enterno de desarrollo

```bash
npm i dotenv --save-dev
npm i nodemon --save-dev
npm i @types/cors --save-dev
npm i @types/express --save-dev 
npm i @types/morgan --save-dev

| Paquete              | Función principal                                                |
|----------------------|------------------------------------------------------------------|
| **dotenv**           | Carga variables de entorno desde `.env`.                         |
| **nodemon**          | Recarga automática del servidor al detectar cambios.             |
| **@types/cors**      | Tipado para usar cors en proyectos TypeScript.                   |
| **@types/express**   | Tipado para Express (si se usa TypeScript o IDEs como VSCode).   |
| **@types/morgan**    | Tipado para Morgan.                                              |
```
---

3. Variables de entorno

Listado de variables necesarias en el archivo `.env`, por ejemplo:

```bash
PORT=3000
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=clave
JWT_SECRET=secreto
```

4. Inicia el servidor

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```
Para compilar la aplicacion para produccion:
```bash
npm run build
```

## 📂 Estructura del proyecto

por definir