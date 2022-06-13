import { BaseEntity } from "typeorm";
export declare class GradeEntity extends BaseEntity {
    grade_id: number;
    name: string;
    maxValue: number;
    minValue: number;
}
