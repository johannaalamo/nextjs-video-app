# Next.js Video App

  
Este proyecto es una aplicación de video construida con [Next.js](https://nextjs.org/), que permite a los usuarios ver y contar las visualizaciones de los videos. También implementa `tRPC` para las comunicaciones API y utiliza `TailwindCSS` para el estilo.

  
## Tecnologías Utilizadas

-   [Next.js](https://nextjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [tRPC](https://trpc.io/)
-   [TypeScript](https://www.typescriptlang.org/)

  

## Características

  

-  **Reproducción de videos**: Los usuarios pueden seleccionar y ver diferentes videos desde la galería.

-  **Conteo de visualizaciones**: El número de visualizaciones de cada video se incrementa automáticamente cuando un usuario lo reproduce.

-  **Galería de videos**: Una lista de videos disponible en la página principal, desde donde los usuarios pueden navegar para ver los videos.

-  **Interfaz de usuario moderna**: Construida con TailwindCSS y ShadCN para una experiencia de usuario agradable.

  

## Requisitos Previos

  

- Node.js (>=14.x)

- npm para la gestión de paquetes

  

## Instalación

  

1. Clona el repositorio:

  

```bash

git clone https://github.com/johannaalamo/nextjs-video-app.git

```

2. Instala las dependencias:

```bash

npm install

```

## Uso

 -  Ejecuta el servidor de desarrollo:
 ```bash
    npm run dev
```

 - Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

La estructura principal del proyecto se basa en:

-   `src/`: Contiene el código fuente de la aplicación.
-   `src/app/page.tsx`: Página principal.
-   `src/app/videos/[id]`: Contiene la vista al reproductor en detalle.
-   `src/app/components/`: Contiene los componentes reutilizables de la aplicación.
-   `src/server/trpc`: Enrutador para la API

 
 ## Scripts Disponibles

 - `dev`: Ejecuta el servidor de desarrollo.
 -   `build`: Compila la aplicación para producción.
 -   `start`: Inicia la aplicación en modo producción.
 -   `lint`: Ejecuta ESLint para encontrar problemas en el código.
 -   `test`: Ejecuta las pruebas unitarias con Jest.

 ## Tests
 El proyecto incluye tests unitarios para algunos de los componentes y funcionalidades principales:
 

 -  Los tests están ubicados en la carpeta `__tests__`.
 - Puedes ejecutarlos con el siguiente comando:
  `npm run test`