import { Question } from 'src/models/questions/entities/question.entity';
import { User } from 'src/models/users/entities/user.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Answer extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 250 })
  description: string;

  @ManyToOne(() => User, user => user.answers)
  user: User;

  @ManyToOne(() => Question, question => question.answers)
  question: Question;

  @ManyToMany(() => User, user => user.answers, { nullable: true })
  @JoinTable()
  upvotes: User[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
