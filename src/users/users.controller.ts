import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post('/createUser')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Get('/')
    getAllUsers(): Promise<UserEntity[]> {
        return this.usersService.getAllUsers();
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersService.signIn(createUserDto);
    }
}
