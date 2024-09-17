import { IsBoolean, IsNotEmpty } from 'class-validator';
import { Todo } from './todo.entity';

export class TodoDto {
  id: string;
  title: string;
  isDone: boolean;

  constructor(todo: Todo) {
    this.id = todo.id;
    this.title = todo.title;
    this.isDone = todo.isDone;
  }
}

export class CreateTodoDto {
  /**
   * @example 'Make a fun game!'
   * */
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  isDone: boolean;

  toEntity(): Todo {
    const todo = new Todo();
    todo.title = this.title;

    return todo;
  }
}

export class UpdateTodoDto extends CreateTodoDto {}
