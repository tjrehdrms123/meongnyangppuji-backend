
import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: configService.get('DB_HOST'), // process.env.DB_HOST
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: process.env.NODE_ENV === 'development' ? configService.get('DB_PASSWORD') : configService.get('DB_PASSWORD_PRO'),
  database: configService.get('DB_NAME'),
  synchronize: process.env.NODE_ENV === 'development' ? true : false, //! set 'false' in production
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  migrationsTableName: 'migrations',
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource