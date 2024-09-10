import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { OtherService } from './other/other.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(OtherService)
  private otherservice: OtherService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('test')
  getTest():string {
    return this.appService.getTest();
  }

  @Get('test2')
  getTest2():string {
    return this.otherservice.test();
  }
}
