import { Controller, Get, Post } from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get('/')
    getAllUsers(): User[] {
        return this.usersService.getAllUsers();
    }

}
