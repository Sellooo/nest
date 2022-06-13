import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity({ name: 'users' })
@Unique(['user_id'])
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id: string;

  @Column()
  password: string;

  @Column({ default: null })
  nickname: string;

  @Column({ default: null })
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}