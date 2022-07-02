import { MigrationInterface, QueryRunner } from 'typeorm';

export class commentsPerTask1656680271954 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE comments (
          id SERIAL PRIMARY KEY,
          comment CHARACTER VARYING (255) NOT NULL,
          task_id bigint
       );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DROP TABLE comments;');
  }
}
