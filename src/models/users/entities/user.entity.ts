import { Answer } from '../../../models/answers/entities/answer.entity';
import { Question } from '../../questions/entities/question.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 60, nullable: false })
  fullName: string;

  @Column({ nullable: true })
  age: number;

  @Column({ default: false })
  isActive: boolean;

  @OneToMany(() => Question, question => question.user)
  questions: Question[];

  @OneToMany(() => Answer, answer => answer.user)
  answers: Answer[];

  @ManyToMany(() => Answer, answer => answer.upvotes)
  upvotes: Answer[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
