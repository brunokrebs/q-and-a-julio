import { Module } from '@nestjs/common';
import { Task } from '../entities/task.entity';
import { TasksController } from '../controllers/tasks.controller';
import { TasksService } from '../services/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
