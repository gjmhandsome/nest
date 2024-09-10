import { Injectable } from '@nestjs/common';

@Injectable()
export class OtherService {
    test():string  {
        return 'this is a test '
    }
}
