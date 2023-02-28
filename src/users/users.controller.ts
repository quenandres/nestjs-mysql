import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor( private userService: UsersService ) {}
    
    @Post()
    createUser(@Body() newUser:CreateUserDto): Promise<User> {
        return this.userService.createUser(newUser);
    }

    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }
}
