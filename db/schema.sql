drop database if exists burgers;
create database burgers;
use burgers;

create table burger(
id int auto_increment, 
name varchar(25),
eaten bool,
primary key(id)
);