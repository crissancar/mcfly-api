import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Delete, HttpStatus, Param, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { AuthUser } from '../../auth/decorators/auth-user.decorator';
import { AuthenticatedUser } from '../../users/dtos/authenticated-user.dto';
import { Response } from 'express';
import { JwtValidator } from '../../shared/services/jwt-validator.service';
import { UserDeactivator } from '../services/user-deactivator.service';

@ApiTags('activated-users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('activated-users')
export class ActivatedUsersDeleteController {
  constructor(private deactivator: UserDeactivator) {}

  @Delete('deactivate/:id')
  async run(@AuthUser() authUser: AuthenticatedUser, @Param('id') id: string, @Res() res: Response) {
    JwtValidator.verifyUserAuth(id, authUser);

    await this.deactivator.run({ id });

    res.status(HttpStatus.OK).send();
  }
}
