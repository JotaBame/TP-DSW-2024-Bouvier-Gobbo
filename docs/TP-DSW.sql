create database IF NOT EXISTS tp;
use tp;
create user IF NOT EXISTS dsw@'%' identified by '1234';
grant all privileges on tp.* to dsw@'%';

