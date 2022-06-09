import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [ProjectsModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
