# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# App Para El Control de Operarios

## Lógica de Negocio:

- La aplicación web permitirá a un gerente llevar un control eficiente de los operarios que están bajo su supervisión.
- Para acceder a la plataforma, el gerente deberá ingresar con sus credenciales de usuario y contraseña.
- Una vez autenticado, podrá ver una lista completa de todos los operarios registrados, donde verá el nombre y número de célula de estos.
- Además debe tener la opción de registrar nuevos operarios o eliminar operarios existentes.
- Se incluirá una sección para registrar a otros gerentes, que tendrán acceso a las mismas funciones y opciones que el gerente principal.

## Requisitos
Asegúrate de tener instalado Node.js y npm en tu sistema.

## Instalación
Clona este repositorio en tu máquina local:
```bash
git clone <git@github.com:MarioPW/control_operarios.git>
```
Navega al directorio del proyecto:
```bash
cd nombre-del-proyecto
```
Instala las dependencias del proyecto utilizando npm:
```bash
npm install
```

Crea un archivo .env.local en la raíz del proyecto y pega las credenciales de Firebase en formato JSON. Las credenciales de Firebase se pueden obtener desde la consola de Firebase. Asegúrate de que el archivo .env.local esté incluido en tu archivo .gitignore para no compartir tus credenciales públicamente.
4. Crea un archivo `.env.local` en la raíz del proyecto y pega las credenciales de Firebase en formato JSON. Las credenciales de Firebase se pueden obtener desde la consola de Firebase. Asegúrate de que el archivo `.env.local` esté incluido en tu archivo `.gitignore` para no compartir tus credenciales públicamente.

## Configuración de Firebase

1. Ve a la [consola de Firebase](https://console.firebase.google.com/) y crea un nuevo proyecto si aún no tienes uno.
2. En la consola de Firebase, ve a la sección "Configuración" y busca la configuración de tu proyecto.
3. Copia las credenciales de tu proyecto de Firebase en formato JSON. 
```js
//Para pasar a formato JSON te recomiendo:
// 1. abrir un archivo de JavaScript y mediante un console.log() asi:

console.log(JSON.stringify( 
  api_key: "tu_api_key"
  auth_domain: "tu_auth_domain"
  project_id: "tu_project_id"
  storage_bucket: "tu_storage_bucket"
  messaging_sender_id: "tu_messaging_sender_id"
  app_id: "tu_app_id"))
  // 2. Copiar desde consola el contenido ya convertido a dicho formato para luego pegarlo en el archivo .env.local */ 
```
4. Crea un archivo `.env.local` en la raíz de tu proyecto React, crea la variable de entorno VITE_FIREBASE_CONFIG y pega las credenciales copiadas en el siguiente formato:

```JS
// Tu variable de entorno debería lucir de esta manera:
VITE_FIREBASE_CONFIG = {"apiKey": "tu_api_key","authDomain": "tu_auth_domain","projectId": "tu_project_id","storageBucket": "tu_storage_bucket","messagingSenderId": "tu_messaging_sender_id","appId": "tu_app_id"}
```
Guarda el archivo .env.local.
## Uso
Inicia el servidor de desarrollo:
```bash
npm run dev
```
Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en ejecución.
## Estructura del Proyecto
Descripción de la estructura de archivos y carpetas del proyecto.

```css
nombre-del-proyecto/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── home
│   │   ├── loginRegister
│   │   └── operators
│   ├── context
│   ├── firebase_config
│   ├── protectedRoutes
│   └── utils
│
├── .env.local
├── .gitignore
├── package.json
├── README.md
└── ...
```
Contribución
Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit de ellos (git commit -am 'Agrega nueva funcionalidad').
4. Haz push de tu rama al repositorio remoto (git push origin feature/nueva-funcionalidad).
5. Abre un pull request.