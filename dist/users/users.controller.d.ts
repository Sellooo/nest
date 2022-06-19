import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/users.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<void>;
    getAllUsers(): Promise<UserEntity[]>;
    signIn(createUserDto: CreateUserDto): Promise<string>;
}
