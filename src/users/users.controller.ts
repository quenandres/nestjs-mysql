import { Body, Controller, Get, Param, Post, ParseIntPipe, Delete, Patch, HttpException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor( private userService: UsersService ) {}
    
    @Post()
    createUser(@Body() newUser:CreateUserDto) {
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

    @Patch(':id')
    updateUSer(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
        return this.userService.updateUser(id, user);
    }
}
