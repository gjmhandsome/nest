import { Controller, Get, Inject } from '@nestjs/common';
import { json } from 'stream/consumers';
import { AppService } from './app.service';
import { PersonService } from './person/person.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello() {
    return 'hello world'
  }

  @Inject('demo1')
  private readonly demo1Service: {name: string, age: number}

  @Inject('demo2')
  private readonly demo2Service: {name: string}

  @Inject('demo3')
  private readonly demo3Service: {name: string}

  @Inject('demo4')
  private readonly demo4Service: PersonService
  
  @Inject('demo5')
  private readonly demo5Service: {name: string, service: string}


  @Get('demo1')
  getHello1(): number {
    debugger;
    return this.demo1Service.age;
  }

  @Get('demo2')
  getHello2(): string {
    return this.demo2Service.name;
  }

  @Get('demo3')
  getHello3(): string {
    return this.demo3Service.name;
  }

  @Get('demo4')
  getHello4(): string {
    return this.demo4Service.findOne(3);
  }

  @Get('demo5')
  getHello5(): string {
    return JSON.stringify(this.demo5Service);
  }
}
