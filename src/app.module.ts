import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { TagsModule } from './tags/tags.module';
import {
  Country,
  Investment,
  Project,
  Report,
  ReportToCountry,
  ReportToInvestment,
  Tag,
} from './_shared/entities';
import { ReportsModule } from './reports/reports.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ProjectsModule,
    TagsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      ...getConnection(),
      entities: [
        Tag,
        Project,
        Report,
        Investment,
        Country,
        ReportToCountry,
        ReportToInvestment,
      ],
      synchronize: true,
    }),
    ReportsModule,
    CacheModule.register(),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    HealthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
  ],
})
export class AppModule {}

// function getConnection() {
//   return {
//     host: process.env.DB_HOST,
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//   };
// }

function getConnection() {
  return {
    host: 'oliadkuxrl9xdugh.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    username: 'nq5h2x8la1nxva90',
    password: 'xjl43fm5omgfojqk',
    database: 'bmg6kkfdmf4wgnwe',
  };
}
