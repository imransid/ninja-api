import { PartialType } from '@nestjs/mapped-types';
import { CreateNinjaAdminDto } from './create-ninja-admin.dto';

export class UpdateNinjaAdminDto extends PartialType(CreateNinjaAdminDto) {}
