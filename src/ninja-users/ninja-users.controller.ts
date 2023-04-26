import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNinjaUsersDto } from './dto/create-ninja-users.dto';
import { type } from 'os';
import { NinjaUsersService } from './ninja-users.service';

@Controller('ninja-users')
export class NinjaUsersController {
  constructor(private readonly ninjaService: NinjaUsersService) {}

  // GET /ninja --> []

  @Get()
  getNinja(@Query('hero') hero: 'saber' | 'hayabusa') {
    return this.ninjaService.getNinjas(hero);
  }

  // GET /ninja/:id

  @Get(':id')
  getOneNinja(@Param('id') id: number) {
    try {
      return this.ninjaService.getNinja(+id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  // POST
  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaUsersDto) {
    return {
      name: createNinjaDto.name,
    };
  }

  // PUT //ninja/:id
  @Put(':id')
  updateNinja(@Param('id') id: string) {
    return {
      id,
    };
  }

  // DELETE /ninja/:id
  @Delete(':id')
  removeNinja() {
    return {};
  }
}
