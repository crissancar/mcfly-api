import { Body, Controller, HttpStatus, Param, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserRequest } from '../dtos/create-user-request.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserCreator } from '../services/user-creator.service';

@ApiTags('users')
@Controller('users')
export class UserPutController {
  constructor(private creator: UserCreator) {}

  @Put(':id')
  @ApiCreatedResponse()
  async run(@Param('id') id: string, @Body() req: CreateUserRequest, @Res() res: Response) {
    await this.creator.run({ id, ...req });

    res.status(HttpStatus.CREATED).send();
  }
}
