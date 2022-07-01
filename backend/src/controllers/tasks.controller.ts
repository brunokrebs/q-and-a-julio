import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
    if (task.effort < 0) {
      console.log('Client sent a negative effort value for a new task.');
      return;
    }
    return this.tasksService.insertTask(task);
  }

  @Put('/:taskId')
  updateTask(
    @Param('taskId') taskId: number,
    @Body() task: Task,
  ): Promise<void> {
    if (task.effort < 0) {
      console.log('Client sent a negative effort value for task id: ' + taskId);
      return;
    }
    return this.tasksService.updateTask(taskId, task);
  }

  @Delete('/:taskId')
  deleteTask(@Param('taskId') taskId: number): Promise<void> {
    return this.tasksService.deleteTask(taskId);
  }
}
