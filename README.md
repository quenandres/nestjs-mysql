<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Setup Project
Crear proyecto
```bash
nest new <name>
```
>

Crear controller
```bash
nest g controller <name>
```
>

Crear modulo
```bash
nest g module <name>
```
>

Crear servicio
```bash
nest g service <name>
```

## TypeORM
Instalación
```bash
npm install --save typeorm mysql2
```

#### _Comando Docker_
```bash
docker run --name mysql-nestjs -p 3380:3306 --restart unless-stopped -e "MYSQL_ROOT_PASSWORD=faztpassword" -e "MYSQL_DATABASE=nestdb" -d mysql
```