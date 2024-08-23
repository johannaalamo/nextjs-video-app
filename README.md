# Next.js Video App

  
Este proyecto es una aplicación de video construida con [Next.js](https://nextjs.org/), que permite a los usuarios ver y contar las visualizaciones de los videos. Implementa `tRPC` para las comunicaciones API, `Prisma` para la gestión de la base de datos PostgreSQL, y utiliza `TailwindCSS` para el estilo.

  
## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [tRPC](https://trpc.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/) - ORM para manejo de bases de datos.
- [PostgreSQL](https://www.postgresql.org/) - Sistema de gestión de bases de datos.

  

## Características

  

-  **Reproducción de videos**: Los usuarios pueden seleccionar y ver diferentes videos desde la galería.

-  **Conteo de visualizaciones**: El número de visualizaciones de cada video se incrementa automáticamente cuando un usuario lo reproduce.

-  **Galería de videos**: Una lista de videos disponible en la página principal, desde donde los usuarios pueden navegar para ver los videos.

-  **Interfaz de usuario moderna**: Construida con TailwindCSS y ShadCN para una experiencia de usuario agradable.

  

## Requisitos Previos

- Node.js (>=14.x)
- npm para la gestión de paquetes
- PostgreSQL (instalado y configurado)

  

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/johannaalamo/nextjs-video-app.git
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Configura la base de datos PostgreSQL:
    - Asegúrate de tener PostgreSQL instalado y en ejecución.
    - Crea una base de datos llamada `video_app` (puedes cambiar el nombre si lo deseas).

4. Configura el archivo `.env`:
    - Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido, ajustando los valores según tu configuración:
    
    ```env
    DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/video_app"
    ```

5. Ejecuta las migraciones de Prisma para crear las tablas necesarias en la base de datos:

    ```bash
    npx prisma migrate dev --name init
    ```

6. (Opcional) Ejecuta el script de seed para insertar datos iniciales en la base de datos:

    ```bash
    npx ts-node prisma/seed.ts
    ```

## Uso

1. Ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    ```

2. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

La estructura principal del proyecto se basa en:

- `src/`: Contiene el código fuente de la aplicación.
- `src/app/page.tsx`: Página principal.
- `src/app/videos/[id]`: Contiene la vista al reproductor en detalle.
- `src/app/components/`: Contiene los componentes reutilizables de la aplicación.
- `src/server/trpc`: Enrutador para la API.
- `prisma/`: Contiene los esquemas de base de datos y el script de seed.

 
 ## Scripts Disponibles

 - `dev`: Ejecuta el servidor de desarrollo.
 -   `build`: Compila la aplicación para producción.
 -   `start`: Inicia la aplicación en modo producción.
 -   `lint`: Ejecuta ESLint para encontrar problemas en el código.
 -   `test`: Ejecuta las pruebas unitarias con Jest.

 ## Pruebas de la API

### Pruebas Manuales

Para probar las rutas API manualmente, puedes utilizar herramientas como [Postman](https://www.postman.com/) o [cURL](https://curl.se/). Aquí te muestro cómo puedes hacer pruebas básicas para cada una de las rutas tRPC definidas en el proyecto.

Asegúrate de que PostgreSQL está en ejecución, ya que los datos ahora se almacenan de manera persistente en la base de datos.

#### Obtener Videos

- **Método:** GET
- **URL:** `http://localhost:3000/api/trpc/getVideos`
- **Descripción:** Obtiene una lista de videos disponibles en la aplicación desde la base de datos.
- **Respuesta Esperada:** Una lista de objetos de video en formato JSON.

#### Incrementar Vistas de Video

- **Método:** POST
- **URL:** `http://localhost:3000/api/trpc/incrementVideoView`
- **Cuerpo de la Solicitud (JSON):**
    
    ```json
    "1"
    ```
    
    **Nota:** Asegúrate de reemplazar `"1"` con el ID del video cuya vista deseas incrementar.
- **Descripción:** Incrementa el contador de vistas para el video con el ID proporcionado en la base de datos.
- **Respuesta Esperada:** El nuevo contador de vistas para el video especificado.

#### Obtener Contador de Vistas de Video

- **Método:** GET
- **URL:** `http://localhost:3000/api/trpc/getVideoViews`
- **Descripción:** Obtiene el contador de vistas de todos los videos en la aplicación desde la base de datos.
- **Respuesta Esperada:** Un objeto JSON con el conteo de vistas para cada video.

### Pruebas Automáticas

El proyecto también incluye pruebas unitarias para las rutas API. Estas pruebas se encuentran en la carpeta `__tests__` y utilizan Jest para ejecutarlas. Asegúrate de tener todas las dependencias necesarias instaladas antes de ejecutar las pruebas.

#### Ejecutar las Pruebas

Para ejecutar las pruebas unitarias, utiliza el siguiente comando:


  ```bash
    npm test
    ```

Esto ejecutará todas las pruebas definidas en el proyecto y te proporcionará un informe de los resultados.

#### Estructura de Pruebas

Las pruebas están organizadas en:

-   **`src/__tests__/trpcApi.test.tsx`**: Pruebas para las rutas de la API tRPC.
-   **`src/__tests__/VideoPlayer.test.tsx`**: Pruebas para el componente `VideoPlayer`.

Asegúrate de revisar y actualizar estas pruebas según sea necesario para reflejar cualquier cambio en las rutas o la funcionalidad de la API.
