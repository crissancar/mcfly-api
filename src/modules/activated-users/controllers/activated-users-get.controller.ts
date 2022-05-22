import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { ActivatedUsersFinder } from '../services/activated-users-finder.service';
import { AuthUser } from '../../auth/decorators/auth-user.decorator';
import { AuthenticatedUser } from '../../users/dtos/authenticated-user.dto';
import { Response } from 'express';

@ApiTags('activated-users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('activated-users')
export class ActivatedUsersGetController {
  constructor(private finder: ActivatedUsersFinder) {}

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
