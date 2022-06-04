import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TextService } from './text.service';
import { CreateTextDto } from './dto/create-text.dto';
import { UpdateTextDto } from './dto/update-text.dto';

@Controller('draw')
export class TextController {
  constructor(private readonly textService: TextService) {}

  @Post('/hi')
  create(@Body() createTextDto: CreateTextDto) {
    console.log(createTextDto);
    return this.textService.create(createTextDto);
  }

  @Get()
  findAll() {
    return this.textService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTextDto: UpdateTextDto) {
    return this.textService.update(+id, updateTextDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textService.remove(+id);
  }
}
