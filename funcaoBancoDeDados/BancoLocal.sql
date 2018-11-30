create database id7241972_targeet;
use id7241972_targeet;

 create table usuario(
 codUser int primary key auto_increment,
 nomeUser varchar(60),
 emailUser varchar(255),
 cpfUser varchar(16),
 telUser varchar(16),
 nomeImgUser varchar(255),
 senhaUser varchar(12));
 
 drop table usuario;
  drop database id7241972_targeet;
  select * from usuario;
 
 update usuario set nomeUser='admin' where codUser='1';
 insert into usuario values(default, "admin","ttargeet@gmail.com","","","userPadrao.jpg","admin");
  insert into usuario values(default, "luana","luaa@gmail.com","","","userPadrao.jpg","12");