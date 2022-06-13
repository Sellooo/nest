import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    user_id: string;

    @IsString()
    password: string;

    @IsString()
    nickname?: string;

    @IsString()
    phone?: string;
}