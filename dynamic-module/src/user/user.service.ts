import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MODULE_OPTIONS_TOKEN, OPTIONS_TYPE} from './user.module-definition';

@Injectable()
export class UserService {

  @Inject(MODULE_OPTIONS_TOKEN)
  private option: typeof OPTIONS_TYPE

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user' ;
  }

  findAll() {
   // debugger
    return `This action returns all user` + this.option.name + this.option.isGlobal;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
