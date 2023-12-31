import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetModule } from './modules/get/get.module';
import { PostModule } from './modules/post/post.module';
import { SseModule } from './modules/sse/sse.module';

@Module({
  imports: [GetModule, PostModule, SseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
