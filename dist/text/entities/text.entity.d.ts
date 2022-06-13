import { BaseEntity } from "typeorm";
export declare class TextEntity extends BaseEntity {
    text_id: number;
    title: string;
    content: string;
    like: number;
    bad: number;
    created_at: Date;
    updated_at: Date;
}
