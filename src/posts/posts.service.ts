import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {

    constructor( 
        @InjectRepository(Post) private postRepository: Repository<Post>,
        private usersService: UsersService
     ){}

    async createPost(post: CreatePostDto) {
        const userFound = await this.usersService.getUSer(post.authorId);
        if( !userFound ) throw new HttpException('user not found', HttpStatus.NOT_FOUND);
        const newPost = this.postRepository.create(post);
        return this.postRepository.save(newPost);
    }

    getPost() {

    }

}
