--liquibase formatted sql

--changeset alex:1 
--comment: created table for editorials
create table editorials (
    id int primary key not null,
    name varchar(255) not null
)

--changeset alex:2
--comment: created table for books
create table books (
    id int primary key not null,
    title varchar(255) not null,
    author varchar(255) not null,
    year int not null,
    editorialId int not null,
    foreign key (editorialId) references editorials(id)
)




