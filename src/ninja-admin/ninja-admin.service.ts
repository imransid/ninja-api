import { Injectable } from '@nestjs/common';
import { CreateNinjaAdminDto } from './dto/create-ninja-admin.dto';
import { UpdateNinjaAdminDto } from './dto/update-ninja-admin.dto';

@Injectable()
export class NinjaAdminService {
  create(createNinjaAdminDto: CreateNinjaAdminDto) {
    return 'This action adds a new ninjaAdmin';
  }

  findAll() {
    return `This action returns all ninjaAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ninjaAdmin`;
  }

  update(id: number, updateNinjaAdminDto: UpdateNinjaAdminDto) {
    return `This action updates a #${id} ninjaAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} ninjaAdmin`;
  }
}
