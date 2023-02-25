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

## User Entity
Se crea la clase y con los decoradores de typeorm se le especifica el tipo de campo, según la bd que hayamos seleccionado.

```ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    username: string

    @Column()
    password: string

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column({ nullable: true })
    authStrategy: string
}
```
Con esta especificación en entities[...] indicamos que obtenga todos los archivos que terminen en entity.ts o .js y los convierta en tablas.
_app.module.ts_
```ts
...
entities: [__dirname + '/**/*.entity{.ts,.js}'],
...
```