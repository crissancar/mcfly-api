import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpStatus, Param, Post, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { AuthUser } from '../../auth/decorators/auth-user.decorator';
import { AuthenticatedUser } from '../../users/dtos/authenticated-user.dto';
import { Response } from 'express';
import { MessageSender } from '../services/message-sender.service';
import { JwtValidator } from '../../shared/services/jwt-validator.service';
import { SendMessageRequest } from '../dtos/send-message-request.dto';

@ApiTags('messages')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('messages')
export class MessagePostController {
  constructor(private sender: MessageSender) {}

  @Post(':senderId/:receiverId')
  async run(
    @AuthUser() authUser: AuthenticatedUser,
    @Param('senderId') senderId: string,
    @Param('receiverId') receiverId: string,
    @Body() req: SendMessageRequest,
    @Res() res: Response,
  ) {
    JwtValidator.verifyUserAuth(senderId, authUser);

    await this.sender.run({ senderId, receiverId, ...req });

    res.status(HttpStatus.OK).send();
  }
}
