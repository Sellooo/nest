import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Users, UsersDocument } from './entities/users.entity';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) { }

    async createUser(createUserDto: CreateUserDto) {
        const { id, password, nickname, phone } = createUserDto;

        const user = {
            id,
            password,
            nickname,
            phone,
        }

        const createUser = new this.usersModel(user);
        return createUser.save();
    }

    async getAllUsers() {
        return;    //유저가져오기
    }
}