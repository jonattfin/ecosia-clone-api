import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { TagsModule } from './tags/tags.module';
import { Project, Tag } from './_shared/entities';
import { ReportsModule } from './reports/reports.module';

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
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

function getConnection() {
  const remoteConnection = {
    host: 'oliadkuxrl9xdugh.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    username: 'nq5h2x8la1nxva90',
    password: 'xjl43fm5omgfojqk',
    database: 'bmg6kkfdmf4wgnwe',
  };


  // const herokuConnection = {
  //   host: process.env.DB_HOST,
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_DATABASE,
  // };

  // return herokuConnection;

  return remoteConnection;
}
