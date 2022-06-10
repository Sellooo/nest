import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'grade' })
export class GradeEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  grade_id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column()
  maxLike: number;

  @Column()
  minLike: number;
}