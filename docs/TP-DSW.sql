create database IF NOT EXISTS tp;
use tp;
create user IF NOT EXISTS dsw@'%' identified by '1234';
grant all privileges on tp.* to dsw@'%'; 


create table IF NOT EXISTS usuarios (
    id int auto_increment primary key,
    nombre varchar(50) not null,
    tipo varchar(50) not null,
    email varchar(100) not null unique,
    peso float not null,
    altura float not null
    );

insert into usuarios values(1,'Mordecai','grodro pirrorro','mordecai@regularshow.com', 76, 175);

create table IF NOT EXISTS objetivos (
    id int auto_increment primary key,
    nombre varchar(50) not null,
    tipo varchar(50) not null,
	fecha_inicio date not null,
    fecha_fin date not null
    );

    insert into objetivos values(1,'Bajar de peso','grodro pirrorro', '2024-01-01', '2024-12-31');
    
    create table IF NOT EXISTS alimento (
    id int auto_increment primary key,
    nombre varchar(50) not null,
    tipo varchar(50) not null,
    email varchar(100) not null unique,
    peso float not null,
    altura float not null
    );