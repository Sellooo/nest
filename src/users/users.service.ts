import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserStatus } from './user.model';

@Injectable()
export class UsersService {
    private users: User[] = []; //데이터베이스 연결 전 임시

    getAllUsers(): User[] {
        return this.users;      //유저가져오기
    }

    createUser(createUserDto: CreateUserDto): User {
        const { id, password } = createUserDto;

        const user = {
            id,
            password,
            test1: 'test1',
            test2: 'test2',
            status: UserStatus.PUBLIC,
        }

        this.users.push(user);
        return user;
    }
}
