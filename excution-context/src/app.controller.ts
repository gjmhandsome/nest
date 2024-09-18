import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth.guard';
import { Roles } from './role/role.decorator';
import { Role } from './role/role';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  getHello(): string {
    return this.appService.getHello();
  }
}
