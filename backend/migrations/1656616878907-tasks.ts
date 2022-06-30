import { MigrationInterface, QueryRunner } from 'typeorm';

export class tasks1656616878907 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE tasks (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL
     );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DROP TABLE tasks;');
  }
}
