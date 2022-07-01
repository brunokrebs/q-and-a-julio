import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from './comment.entity';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  effort: number;

  @Column()
  archived: boolean = false;

  @OneToMany(() => Comment, (comment) => comment.task)
  comments: Comment[];
}
