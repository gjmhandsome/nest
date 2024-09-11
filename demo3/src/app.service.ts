import { Inject, Injectable } from '@nestjs/common';
import { OtherService } from './other/other.service';

@Injectable()
export class AppService {
  getHello(): string {
    // node的debug方式，node --inspect-brk, nest是 --debug，然后可以借助chrome devtools连接调试
    // 最方便的方式是直接在vscode中调试，通过配置launch.json来实现，里面写上 npm run start 
    // debugger;
    return 'Hello World23!';
  }
  
  @Inject(OtherService)
  private otherservice: OtherService;

  getTest():string {
    return this.otherservice.test();
  }
}
