import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { AuthUser } from '../../auth/decorators/auth-user.decorator';
import { AuthenticatedUser } from '../../users/dtos/authenticated-user.dto';
import { Response } from 'express';
import { ActivatedUsersGetter } from '../services/activated-users-getter.service';

@ApiTags('activated-users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('activated-users')
export class ActivatedUsersGetController {
  constructor(private finder: ActivatedUsersGetter) {}

  @Get()
  async run(@AuthUser() authUser: AuthenticatedUser, @Res() res: Response) {
    try {
      const activatedUsers = await this.finder.run();

      res.status(HttpStatus.OK).send(activatedUsers);
    } catch (error) {
      res.status(error.getStatus()).send();
    }

    res.status(HttpStatus.OK).send();
  }
}
