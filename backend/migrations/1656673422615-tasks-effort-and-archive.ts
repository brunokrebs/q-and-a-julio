import { MigrationInterface, QueryRunner } from 'typeorm';

export class tasksEffortAndArchive1656673422615 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      'alter table tasks add column archived boolean not null default true;',
    );
    queryRunner.query('ALTER TABLE tasks ADD COLUMN effort smallint;');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
       queryRunner.query('alter table task drop effort;');
      queryRunner.query('alter table task drop archived;');
  }
}
