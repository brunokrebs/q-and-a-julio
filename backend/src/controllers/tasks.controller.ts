import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Comment } from 'src/entities/comment.entity';
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

  @Post('/new-comment/:taskId')
  async insertComment(
    @Param('taskId') taskId: number,
    @Body() comment: Comment,
  ): Promise<void> {
    if (!comment.comment) {
      console.log('Comment is missing.');
      return;
    }
    if (comment.comment.length > 255) {
      console.log('Comment is too long.');
      return;
    }
    const task = await this.tasksService.tasksRepository.findOne({
      where: { id: taskId },
    });
    if (!task) {
      console.log('Invalid task id.');
      return;
    }
    await this.tasksService.commentsRepository.insert({
      ...comment,
      task: task,
    });
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
