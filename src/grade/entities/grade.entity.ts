import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'grade' })
export class GradeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  grade_id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ name: 'max_value' })
  maxValue: number;

  @Column({ name: 'min_value' })
  minValue: number;
}
