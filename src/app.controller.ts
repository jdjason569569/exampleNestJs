import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  getProduct(@Param('id') id: string){
     return `Produc ${id}`;
  }

  @Post()
  create(@Body() payload){
    return {
      msg: 'creado',
      payload
    }
  }

  @Put(':id')
  update(@Param('id') id:number, @Body() payload){
    return {
      id,
      payload
    }
  }

  @Delete(':id')
  delete(@Param('id') id: number){
    return id;
  }


}
