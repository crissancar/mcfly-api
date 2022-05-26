import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, HttpStatus, Param, Post, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { UserActivator } from '../services/user-activator.service';
import { AuthUser } from '../../auth/decorators/auth-user.decorator';
import { AuthenticatedUser } from '../../users/dtos/authenticated-user.dto';
import { Response } from 'express';
import { JwtValidator } from '../../shared/services/jwt-validator.service';

@ApiTags('activated-users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('activated-users')
export class ActivatedUsersPostController {
  constructor(private activator: UserActivator) {}

  @Post('activate/:id')
  async run(@AuthUser() authUser: AuthenticatedUser, @Param('id') id: string, @Res() res: Response) {
    JwtValidator.verifyUserAuth(id, authUser);

    await this.activator.run({ id });

    res.status(HttpStatus.OK).send();
  }
}
