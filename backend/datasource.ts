import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mysecretpassword',
  database: 'q-and-a',
  entities: ['src/**/*.entity{ .ts,.js}'],
  synchronize: false,
  migrations: ['migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
});
