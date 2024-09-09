import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { AaaController } from './aaa.controller';
import { XxxModule } from './xxx/xxx.module';
import { BbbModule } from './bbb/bbb.module';

@Module({
  imports: [TestModule, XxxModule, BbbModule],
  controllers: [AppController, AaaController],
  providers: [AppService],
})
export class AppModule {}
