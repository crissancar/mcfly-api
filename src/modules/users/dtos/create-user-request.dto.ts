import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRequest {
  id: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
