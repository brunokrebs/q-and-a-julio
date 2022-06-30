import { Injectable } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: Repository<Task>) {}

  getTasks(): Promise<Task[]> {
    return this.tasksRepository.find();
  }
}
