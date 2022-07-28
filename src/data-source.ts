import { DataSource } from 'typeorm';
import { Category } from './entities/Category';
import { Video } from './entities/Video';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'dev',
  synchronize: false,
  logging: false,
  entities: [Category, Video],
  subscribers: [],
  migrations: ['./src/database/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(async () => {
    console.log('Database connected');
  })
  .catch((error) => console.log(error));
