import { Body, Controller, HttpStatus, Param, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserRequest } from '../dtos/create-user-request.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserCreator } from '../services/user-creator.service';
import { UserAlreadyExists } from '../exceptions/user-already-exists.exception';

@ApiTags('users')
@Controller('users')
export class UserPutController {
  constructor(private creator: UserCreator) {}

  @Put(':id')
  @ApiCreatedResponse()
  async run(@Param('id') id: string, @Body() req: CreateUserRequest, @Res() res: Response) {
    try {
      await this.creator.run({ id, ...req });
    } catch (error) {
      if (error instanceof UserAlreadyExists) {
        res.status(HttpStatus.BAD_REQUEST).send();
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
      }
    }

    res.status(HttpStatus.CREATED).send();
  }
}
