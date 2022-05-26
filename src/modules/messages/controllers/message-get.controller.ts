import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Param, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { MessageFinder } from '../services/message-finder.service';
import { AuthUser } from '../../auth/decorators/auth-user.decorator';
import { AuthenticatedUser } from '../../users/dtos/authenticated-user.dto';
import { Response } from 'express';
import { JwtValidator } from '../../shared/services/jwt-validator.service';

@ApiTags('messages')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('messages')
export class MessageGetController {
  constructor(private finder: MessageFinder) {}

  @Get(':id')
  async run(@AuthUser() authUser: AuthenticatedUser, @Param('id') id: string, @Res() res: Response) {
    JwtValidator.verifyUserAuth(id, authUser);

    const messages = await this.finder.run({ id });

    res.status(HttpStatus.OK).send(messages);
  }
}
