import { Body, Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateUserRequest } from '../../users/dtos/create-user-request.dto';
import { UserCreator } from 'src/modules/users/services/user-creator.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthAccountPostController {
  constructor(private creator: UserCreator) {}

  @Post('account/:id')
  async run(@Param('id') id: string, @Body() req: CreateUserRequest, @Res() res: Response) {
    await this.creator.run({ id, ...req });

    res.status(HttpStatus.CREATED).send();
  }
}
