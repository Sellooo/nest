import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'text' })
export class TextEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  text_id: number;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'varchar', length: 200 })
  content: string;

  @Column({ default: 0 })
  like: number;

  @Column({ default: 0 })
  bad: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
