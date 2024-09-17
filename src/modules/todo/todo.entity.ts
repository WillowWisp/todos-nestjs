import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Base } from '../shared/base.entity';

@Entity()
export class Todo extends Base {
  @Column()
  title: string;

  @Column({ default: false })
  isDone: boolean;
}
