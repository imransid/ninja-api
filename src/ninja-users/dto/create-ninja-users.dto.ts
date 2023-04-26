import { MinLength } from 'class-validator';
export class CreateNinjaUsersDto {
  @MinLength(3)
  name: string;
}
