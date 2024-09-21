import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {ConfigurableModuleClass } from './user.module-definition';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule extends ConfigurableModuleClass {}
