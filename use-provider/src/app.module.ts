import { Module } from '@nestjs/common';
import { response } from 'express';
import { async } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { PersonService } from './person/person.service';

@Module({
  imports: [PersonModule],
  controllers: [AppController],
  // providers: [AppService],
  providers: [
  AppService, 
  {
    provide: 'demo1',
    useValue: {name: 'galen', age: 27}
  }, 
  {
    provide: 'demo2',
    useFactory: () => {
      return {
        name: 'galen2'
      }
    }
  },
  {
    provide: 'demo3',
    useFactory: async() => {
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000)
      })
      return {
        name: 'galen3'
      }
    }
  }, 
  {
    provide: 'demo4',
    useExisting: PersonService
  },{
    provide: 'demo5',
    useFactory: (person: {name: string}, personService: PersonService) => {
      return {
        name: person.name,
        service: personService.findAll()
      }
    },
    inject: ['demo2', PersonService]
  }
  ],
})
export class AppModule {}
