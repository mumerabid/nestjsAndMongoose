import { Body, Controller, Post } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}
  @Post()
  createCat(@Body() data) {
    return this.catService.createCat(data);
  }
}
