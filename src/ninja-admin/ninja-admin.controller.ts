import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NinjaAdminService } from './ninja-admin.service';
import { CreateNinjaAdminDto } from './dto/create-ninja-admin.dto';
import { UpdateNinjaAdminDto } from './dto/update-ninja-admin.dto';

@Controller('ninja-admin')
export class NinjaAdminController {
  constructor(private readonly ninjaAdminService: NinjaAdminService) {}

  @Post()
  create(@Body() createNinjaAdminDto: CreateNinjaAdminDto) {
    return this.ninjaAdminService.create(createNinjaAdminDto);
  }

  @Get()
  findAll() {
    return this.ninjaAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ninjaAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNinjaAdminDto: UpdateNinjaAdminDto) {
    return this.ninjaAdminService.update(+id, updateNinjaAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ninjaAdminService.remove(+id);
  }
}
