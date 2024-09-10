import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';


@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.personService.findOne(+id);
  // }
  
  @Post('formData')
  @UseInterceptors(AnyFilesInterceptor({
    dest: 'uploads/'
  }))
  testFormData(@Body() test: CreatePersonDto, @UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files)
    return  `receive: ${JSON.stringify(test)})`
  }

  @Get('find')
  testQuery(@Query('name') name: string, @Query('age') age: number) {
    return `testQuery: name: ${name}, age: ${age}`;
  }

  @Get(':id')
  findById(@Param('id') id:string) {
    return `receive: id=${id}`
  }

  @Post('urlEncodeed')
  testUrl(@Body() test: CreatePersonDto) {
    return `receive: ${JSON.stringify(test)}`
  }

  @Post('json')
  testJson(@Body() test: CreatePersonDto) {
    return `receive: ${JSON.stringify(test)}`
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
