import { Controller, Get, HttpStatus, Param, Res, UseGuards } from '@nestjs/common';
import { AuthUser } from '../../auth/decorators/auth-user.decorator';
import { AuthenticatedUser } from '../../users/dtos/authenticated-user.dto';
import { Response } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { NotificationFinder } from '../services/notification-finder.service';
import { JwtValidator } from '../../shared/services/jwt-validator.service';

@ApiTags('notifications')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationGetController {
  constructor(private finder: NotificationFinder) {}

  @Get(':id')
  async run(@AuthUser() authUser: AuthenticatedUser, @Param('id') id: string, @Res() res: Response) {
    try {
      JwtValidator.verifyUserAuth(id, authUser);

      const notifications = await this.finder.run({ id });

      res.status(HttpStatus.OK).send(notifications);
    } catch (error) {
      res.status(error.getStatus()).send();
    }

    res.status(HttpStatus.OK).send();
  }
}
