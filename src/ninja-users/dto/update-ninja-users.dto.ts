import { PartialType } from '@nestjs/mapped-types';
import { CreateNinjaUsersDto } from './create-ninja-users.dto';

export class UpdateNinjaUsersDto extends PartialType(CreateNinjaUsersDto) {}
