import { Body, Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UserCreator } from '../../users/services/user-creator.service';
import { CreateUserRequest } from '../../users/dtos/create-user-request.dto';

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
