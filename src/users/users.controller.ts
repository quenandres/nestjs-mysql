import { Body, Controller, Get, Param, Post, ParseIntPipe, Delete } from '@nestjs/common';
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

    @Get(':id')
    getUSer(@Param('id', ParseIntPipe) id:number ) {
        return this.userService.getUSer(id);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id);
    }
}
