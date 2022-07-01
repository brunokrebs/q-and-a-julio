import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly tasksRepository: Repository<Task>,
  ) {}

  getTasks(): Promise<Task[]> {
    return this.tasksRepository.find();
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
