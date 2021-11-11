import { Answer } from '../../answers/entities/answer.entity';
import { User } from '../../users/entities/user.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Question extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 70 })
  title: string;

  @Column({ nullable: true, type: 'varchar', length: 100 })
  description: string;

  @ManyToOne(() => User, user => user.questions)
  user: User;

  @OneToMany(() => Answer, answer => answer.question)
  answers: Answer[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
