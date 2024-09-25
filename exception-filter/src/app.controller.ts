import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new HttpException('xxx', HttpStatus.BAD_REQUEST)
    return this.appService.getHello();
  }

  @Get('user')
  getHello2(@Query('user') user: string): string {
    return this.appService.getHello();
  }
}
