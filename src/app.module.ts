import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3380,
      username: 'root',
      password: 'faztpasword',
      database: 'nestdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, //Sincronizar los cambios en bd cuando se hagan los cambios en las clases.
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
