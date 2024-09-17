import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateTodoDto, TodoDto, UpdateTodoDto } from './todo.dto';

@ApiTags('Todo')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  /**
   * Get all todos
   */
  @Get()
  async findAll(): Promise<TodoDto[]> {
    return await this.todoService.findAll();
  }

  /**
   * Create a new todo
   */
  @Post()
  async create(@Body() body: CreateTodoDto): Promise<TodoDto> {
    return await this.todoService.create(body);
  }

  /**
   * Update a todo
   */
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateTodoDto,
  ): Promise<TodoDto | null> {
    return await this.todoService.update(id, body);
  }
}
