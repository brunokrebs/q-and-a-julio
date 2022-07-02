import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/entities/comment.entity';
import { Task } from 'src/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    public readonly tasksRepository: Repository<Task>,
    @InjectRepository(Comment)
    public readonly commentsRepository: Repository<Comment>,
  ) {}

  async getTasks(): Promise<Task[]> {
    const tasks = await this.tasksRepository.find();
    const updateTasksJob = tasks.map(async (task) => {
      const comments = await this.commentsRepository.find({ where: { task } });
      task.comments = comments;
    });
    await Promise.allSettled(updateTasksJob);
    return tasks;
  }

  async insertTask(task: Task): Promise<void> {
    await this.tasksRepository.insert(task);
  }

  async updateTask(taskId: number, task: Task): Promise<void> {
    await this.tasksRepository.update({ id: taskId }, task);
  }

  async deleteTask(taskId: number): Promise<void> {
    await this.tasksRepository.delete({ id: taskId });
  }
}
