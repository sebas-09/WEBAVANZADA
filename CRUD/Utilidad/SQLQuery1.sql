
create database DBCRUDCORE

USE DBCRUDCORE

CREATE TABLE CARGO(
IdCargo int primary key identity(1,1),
Descripcion varchar(50)
)

create table EMPLEADO(
IdEmpleado int primary key identity(1,1),
NombreCompleto varchar(60),
Correo varchar(60),
Telefono varchar(60),
Cedula varchar(60),
Direccion varchar(60),
IdCargo int,
CONSTRAINT FK_Cargo FOREIGN KEY (IdCargo) REFERENCES CARGO(IdCargo)
)

INSERT INTO CARGO(Descripcion) VALUES
('Asistente de ventas'),
('Marketing'),
('Atencion al Cliente')
select * from CARGO

INSERT INTO EMPLEADO(NombreCompleto,Correo,Telefono,Cedula,Direccion,IdCargo) VALUES
('Juan Perez','juan@gmail.com','0987654321','1722194147','Quito',1)
select * from EMPLEADO
DELETE FROM EMPLEADO
WHERE IdEmpleado = '6';