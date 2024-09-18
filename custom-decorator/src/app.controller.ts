import { Controller, Get, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { GetPath, MyParams, MyController, MyController2} from './get-path/get-path.decorator';

// @Controller()
// @MyController()
@MyController2()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @GetPath('hello')
  getHello2(@MyParams('name', new ParseIntPipe()) name): string {
    return this.appService.getHello() + name;
  }
}
