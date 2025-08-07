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
    
create table IF NOT EXISTS alimentos (
    id int auto_increment primary key,
    nombre varchar(50) not null,
    tipo varchar(50) not null,
    email varchar(100) not null unique,
    peso float not null,
    altura float not null
    );

insert into alimentos values(1,'Arandanos','Arcor',null,'gramos');

create table IF NOT EXISTS categoria (
    id int auto_increment primary key,
    nombre varchar(50) not null,
    descripcion varchar(255) not null
);

insert into categoria values(1,'Frutas','Frutas frescas y secas');

create table IF NOT EXISTS receta (
    id int auto_increment primary key,
    nombre varchar(50) not null,
    descripcion text not null,
    tiempo_preparacion int not null,
    dificultad varchar(20) not null
);

insert into receta values(1,'Ensalada de frutas','Una deliciosa ensalada de frutas frescas',10,'fácil');

create table IF NOT EXISTS nutriente (
    id int auto_increment primary key,
    nombre varchar(50) not null,
    tipo varchar(50) not null,
    cantidad float not null,
    unidad_medida varchar(20) not null
);

insert into nutriente values(1,'Vitamina C','Vitaminas',60,'mg');

create table IF NOT EXISTS alimento_nutriente (
    id int auto_increment primary key,
    alimento_id int not null,
    nutriente_id int not null,
    cantidad float not null,
    unidad_medida varchar(20) not null,
    foreign key (alimento_id) references alimento(id),
    foreign key (nutriente_id) references nutriente(id)
);

insert into alimento_nutriente values(1,1,1,100,'gramos');

create table if not exists alimento_categoria (
    id int auto_increment primary key,
    alimento_id int not null,
    categoria_id int not null,
    foreign key (alimento_id) references alimento(id),
    foreign key (categoria_id) references categoria(id)
);
