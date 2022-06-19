import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/users.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(createUserDto: CreateUserDto): Promise<void>;
    getAllUsers(): Promise<UserEntity[]>;
    signIn(createUserDto: CreateUserDto): Promise<string>;
}
