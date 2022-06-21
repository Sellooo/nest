import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    nickname?: string;

    @IsString()
    phone?: string;
}