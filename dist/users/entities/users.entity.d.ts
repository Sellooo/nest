import { BaseEntity } from "typeorm";
export declare class UserEntity extends BaseEntity {
    user_id: number;
    email: string;
    password: string;
    point: number;
    nickname: string;
    phone: string;
    created_at: Date;
    updated_at: Date;
}
