import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ){}

    async createUser(user: CreateUserDto){
        const userFound = await this.userRepository.findOne({
            where: {
                username: user.username
            }
        });
        
        if( userFound ) {
            return new HttpException('User already exist', HttpStatus.CONFLICT);
        }

        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    getUsers(){
        return this.userRepository.find();
    }

    async getUSer(id: number) {
        const userFound = await this.userRepository.findOne({
            where: {
                id
            }
        });

        if( !userFound ) {
            return new HttpException('user not found', HttpStatus.NOT_FOUND);
        }

        return userFound;
    }

    async deleteUser(id: number) {

        const result = await this.userRepository.delete({id});

        if( result.affected === 0 ) {
            return new HttpException('user not found', HttpStatus.NOT_FOUND);
        }       

        return result;
    }

    async updateUser(id: number, user: UpdateUserDto) {

        const userFound = await this.userRepository.findOne({
            where: {
                id
            }
        });

        if( !userFound ) {
            return new HttpException('user not found', HttpStatus.NOT_FOUND);
        }

        const userFound2 = await this.userRepository.findOne({
            where: {
                username: user.userName
            }
        });

        console.log(userFound2);        

        if( userFound2 ) {
            return new HttpException('user already exist', HttpStatus.CONFLICT);
        }

        const updateUser = Object.assign(userFound, user);

        return this.userRepository.save(updateUser);
    }
}
