import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto, TodoDto, UpdateTodoDto } from './todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<TodoDto[]> {
    return (await this.todoRepository.find()).map((todo) => new TodoDto(todo));
  }

  async create(createDto: CreateTodoDto): Promise<TodoDto> {
    const todo = await this.todoRepository.save(createDto.toEntity());
    return new TodoDto(todo);
  }

  async update(id: string, updateDto: UpdateTodoDto): Promise<TodoDto | null> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new HttpException('Todo not found', 404);
    }

    await this.todoRepository.update(id, updateDto);
    return await this.todoRepository.findOneBy({ id });
  }
}
