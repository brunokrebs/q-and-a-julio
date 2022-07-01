import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Task } from './entities/task.entity';
import { TasksModule } from './modules/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'q-and-a',
      entities: [Comment,Task],
      synchronize: false,
    }),
    TasksModule,
  ],
})
export class AppModule {}
