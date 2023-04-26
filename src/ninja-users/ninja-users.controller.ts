import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateNinjaUsersDto } from './dto/create-ninja-users.dto';

@Controller('ninja-users')
export class NinjaUsersController {
  // GET /ninja --> []

  @Get()
  getNinja() {
    return [];
  }

  // GET /ninja/:id

  @Get(':id')
  getOneNinja() {
    return {};
  }

  // POST
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaUsersDto) {
    return {
      name: createNinjaDto.name,
    };
  }

  // PUT //ninja/:id
  @Put(':id')
  updateNinja() {
    return {};
  }

  // DELETE /ninja/:id
  @Delete(':id')
  removeNinja() {
    return {};
  }
}
