import { Controller, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { PayloadCreator } from '../services/payload-creator.service';
import { AuthUser } from '../decorators/auth-user.decorator';
import { AuthenticatedUser } from '../../users/dtos/authenticated-user.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthLoginPostController {
  constructor(private payloadCreator: PayloadCreator) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async run(@AuthUser() authUser: AuthenticatedUser, @Res() res: Response) {
    const token = this.payloadCreator.run(authUser);

    res.status(HttpStatus.OK).send(token);
  }
}
