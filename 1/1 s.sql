create database Prod;
use Prod

create table produtos(
 name varchar(50),
 price decimal(5,2),
 description varchar(25)
);

insert into Prod.produtos (name, price, description) values 
("iphone", 500.95, "descriçaod o produto"),
("nokia",  50.00, "tijolão"),
("motorola",200.35, "tela trincadinha"),
("samsung",10.99, "pocket mini");

select*from produtos where name = "iphone";

describe produtos;
set sql_safe_updates = 0;
delete from produtos where name= "iphone" and price >= 500.00;

alter table produtos  add column id int primary key auto_increment not null;
alter table produtos drop column id;
alter table produtos add column id int primary key auto_increment not null unique