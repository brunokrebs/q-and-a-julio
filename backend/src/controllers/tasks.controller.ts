import { Controller, Get } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { TasksService } from '../services/tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }
}
