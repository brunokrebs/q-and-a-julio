import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { TasksService } from '../services/tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Post()
  insertTask(@Body() task: Task): Promise<void> {
    return this.tasksService.insertTask(task);
  }

  @Delete('/:taskId')
  deleteTask(@Param('taskId') taskId: number): Promise<void> {
    return this.tasksService.deleteTask(taskId);
  }
}
