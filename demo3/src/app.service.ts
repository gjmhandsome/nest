import { Inject, Injectable } from '@nestjs/common';
import { OtherService } from './other/other.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  @Inject(OtherService)
  private otherservice: OtherService;

  getTest():string {
    return this.otherservice.test();
  }
}
