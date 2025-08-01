create database IF NOT EXISTS usuarios;
use usuarios;
create user IF NOT EXISTS facu@'%' identified by '1234';
grant all privileges on usuarios.* to facu@'%';

create table IF NOT EXISTS usuarios (
    id int auto_increment primary key,
    nombre varchar(50) not null,
    tipo varchar(50) not null,
    email varchar(100) not null unique,
    peso float not null,
    altura float not null
    );
    

insert into usuarios values(1,'Mordecai','grodro pirrorro','mordecai@regularshow.com', 76, 175);