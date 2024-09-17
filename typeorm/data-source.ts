import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'todos_db',
  entities: ['src/**/*.entity.ts'],
  migrations: ['typeorm/migrations/*.ts'],
  namingStrategy: new SnakeNamingStrategy(),
});

dataSource.initialize();
