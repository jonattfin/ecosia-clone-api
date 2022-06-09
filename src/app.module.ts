import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { TagsModule } from './tags/tags.module';

import { Tag } from './tags/entities/tag.entity';
import { Project } from './projects/entities/project.entity';

@Module({
  imports: [
    ProjectsModule,
    TagsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      ...getConnection(),
      entities: [Tag, Project],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

function getConnection() {
  // const localConnection = {
  //   host: 'localhost',
  //   username: 'root',
  //   password: 'root',
  //   database: 'test',
  // };

  const herokuConnection = {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };

  return herokuConnection;
}
