aqui va todo el codigo de la api, y como esto es un servidor, aqui va a servir el codigo del frontend

routes: contiene las rutas del backend, es decir los endpointsque el frontend puede pedir.

controllers: contiene las funciones que se van a ejecutar al visitar una url (endpoint).

models: Contiene los modelos de datos de la base de datos.
Nota: mongoDB puede almacenar cualquier dato, pero estos modelos permiten indicarle a mongo que datos queremos que se almacenen y si no cumple con los datos que hemos especificado en esta seccion, que arroje un error. Es decir, vamos a estar creando esquemas.
Aqui le indicamos a mongobd como deben de lucir los datos que se van a guardar, y si no se cumple lo especificado, que regrese un error.

middlewares: contiene las funciones que se ejecutan antes de retornar una respuesta al consultar un endpont.
en estge caso las estamos usando para verificar

schemas: validaciones en el backend, valida los datos recibidos y arroja un error si no cumple con lo solicidato. en este caso se usa SOT

libs: bloques de codigo reutilizable, ejem, funcion para generar tokens

db.js: contiene la base de datos, se usa mongodb

config.js: configuraciones globales del proyecto

app.js: configuraciones de express

index.js: arranca el servidor, llama el codigo de express, llama a la base de datos e inicializa otros servicios