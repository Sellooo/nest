export interface User {
    id: string;
    password: number;
    test1: string;
    test2: string;
    status: UserStatus;
}

export enum UserStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
}