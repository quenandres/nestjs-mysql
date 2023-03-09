import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Profile } from './users/profile.entity';
import { PostsService } from './posts/posts.service';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3380,
      username: 'root',
      password: 'faztpassword',
      database: 'nestdb',
      //entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [ User, Profile, Post ],
      synchronize: true, //Sincronizar los cambios en bd cuando se hagan los cambios en las clases.
    }),
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
