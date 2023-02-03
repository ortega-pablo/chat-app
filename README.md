# Chat App

Aplicación de chat en tiempo real creada para practicar mis conocimientos.

La aplicación consta de un cliente, un servidor y una base de datos.

Sus funciones son poder realizar un registro, inicio de sesión, servicio de mensajería que incluye un panel para poder ver a todos los miembros del sistema, poder seleccionar cada uno y empezar a chatear con los mismo.

Se provee un panel para poder cambiar el avatar y la contraseña. También tiene la opción para poder alternar entre tema de estilos claro y oscuro. Por otro lado brinda la posibilidad de poder cerrar sesión para que no quede iniciada.

---
## Template frontend

El template del frontend está creado dentro de la carpeta *client*. Se creó mediante la herramienta de compilación Vite, configurado para funcionar con React y Typescript.

Las dependencias instaladas para utilizar en el frontend son: 

- *Axios :* Librería que facilita todo tipo de operaciones como cliente HTTP. Permite realizar solicitudes completamente configurable y recibir la respuesta para ser fácilmente procesada.

- *Socket.io-client :* Biblioteca basada en el protocolo WebSockets que permite la comunicación bidireccional y basada en eventos entre un cliente y un servidor (en este caso es la biblioteca utilizada en el cliente).

- *Eslint :* Herramienta para identificar e informar sobre patrones encontrados en el código ECMAScript / JavaScript, con el objetivo de hacer que el código sea más consistente y evitar errores.

- *Prettier :* Herramienta para dar formato al código.

- *React Router Dom :* Biblioteca de enrutamiento del lado del servidor y del cliente con todas las funciones para React. Permite implementar el enrutamiento dinámico en una aplicación web.

- *Styled Components :* Librería que permite dar estilo mediante código CSS a nuestra aplicación web.

- *Emoji-picker-react :* Componente selector de emojis para aplicaciones React.

- *React-Toastify :* Biblioteca que permite agregar notificaciones y alertas.

- *Sweetalert2 :* Permite generar cuadros emergentes personalizables.

---
## Template backend

El template del backend está creado dentro de la carpeta *client*. Como base de datos se utilizó MongoDb y su ODM mongoose sobre el entorno de desarrollo de javascript NodeJs junto al lenguaje Typescript.

Las dependencias instaladas para utilizar en el backend son: 

- *ExpressJs :* Es un framework web, escrito en JavaScript y alojado dentro del entorno de ejecución NodeJS. Proporciona mecanismos para: Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).

- *Mongoose :* Es un ODM que proporciona una solución sencilla y basada en esquemas para modelar los datos de su aplicación sobre los controladores nativos de MongoDB. Incluye fundición de tipos incorporada, validación (que mejora la validación de documentos nativos de MongoDB), creación de consultas, ganchos y más.

- *Socket.io :* Biblioteca basada en el protocolo WebSockets que permite la comunicación bidireccional y basada en eventos entre un cliente y un servidor (en este caso es la biblioteca utilizada en el servidor).

- *Eslint :* Herramienta para identificar e informar sobre patrones encontrados en el código ECMAScript / JavaScript, con el objetivo de hacer que el código sea más consistente y evitar errores.

- *Prettier :* Herramienta para dar formato al código.

- *Cors :* Paquete de NodeJs. que proporciona un middleware Connect/Express que se utiliza para habilitar CORS con varias opciones.

- *Jason Web Token :* Es un estándar abierto basado en JSON propuesto por IETF (RFC 7519) para la creación de tokens de acceso que permiten la propagación de identidad y privilegios o claims en inglés.

- *bcrypt :* Biblioteca que permite hashear una contraseña.

- *passport :* provee un middleware de autenticación compatible con express para NodeJs. El único propósito de Passport es autenticar las solicitudes, lo que hace a través de un Conjunto extensible de plugins conocidos como estrategias. 


