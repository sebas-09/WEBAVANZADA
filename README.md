"# WEBAVANZADA" 
PARA EL PROYECTO "CRUD"
Configuración del Proyecto
Para configurar correctamente el proyecto antes de su primera ejecución, se requiere realizar las siguientes tareas:

1. Clonar Repositorio

Clona este repositorio desde GitHub en tu máquina local usando Git. Para ello puedes usar Visual Studio, GitHub Desktop u otras herramientas similares. Obtendrás una copia completa del código fuente.

2. Abrir solución en Visual Studio

Una vez clonado, abre la solución CRUDCORE.sln con Visual Studio 2022 para cargar el proyecto. Asegúrate que al abrirlo se restauren todos los paquetes NuGet, lo cual puede tomar algunos minutos.

3. Revisar dependencias y paquetes

Examina en el explorador de soluciones la lista completa de paquetes NuGet instalados y dependencias del proyecto. Algunas librerías clave utilizadas son:

Microsoft.EntityFrameworkCore.SqlServer
Microsoft.EntityFrameworkCore.Tools
Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation
Revisa que las versiones sean compatibles y estén actualizadas.

4. Cadena de conexión a la BD

La cadena de conexión hacia la base de datos SQL Server se encuentra en el archivo appsettings.json. Verifica que los parámetros sean correctos, especialmente el servidor, base de datos, usuario y contraseña. Estos deben coincidir con tu configuración local de SQL Server Express.

5. Migraciones de Entity Framework

Ejecuta los siguientes comandos en la Consola de Administrador de Paquetes para crear la migración inicial e implementar las tablas y relaciones en la BD:

Add-Migration InitialMigration
Update-Database

Esto utilizará Entity Framework Core para gestionar el esquema de la base de datos.
Compilación y Ejecución

Finalmente, compila la solución completa en modo Release para publicar la aplicación, y ejecútala a través de Visual Studio para verificar que funciona correctamente.

Con estos pasos ya deberías tener el sistema completamente configurado y listo para operar.
