import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_INTERCEPTOR } from '@nestjs/core';

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
import { HealthModule } from './health/health.module';
import { SearchModule } from './search/search.module';
import { EventsModule } from './events/events.module';

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
    SearchModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
  ],
})
export class AppModule {}

function getConnection() {
  return {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };
}



