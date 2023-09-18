# Capa de Datos (DAL - Data Access Layer)

## Modelo (Model) 

En esta capa, se definen las estructuras de datos que representan las entidades que se almacenan en la base de datos. Estos modelos a menudo se corresponden directamente con las tablas de la base de datos y pueden incluir propiedades y validaciones necesarias para representar correctamente los datos. El modelo también puede incluir mapeos de base de datos (ORM, Object-Relational Mapping) si se utiliza en la aplicación.

## Repositorios (Repositories) 
Los repositorios actúan como una interfaz entre la capa de servicios y la base de datos. Proporcionan métodos para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en las entidades de la base de datos. Estos repositorios encapsulan la lógica de acceso a la base de datos y permiten que la capa de servicios interactúe con los datos sin preocuparse por los detalles de la implementación de la base de datos.