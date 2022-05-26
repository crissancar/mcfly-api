import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Param, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { UserFinder } from '../services/user-finder.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { AuthUser } from '../../auth/decorators/auth-user.decorator';
import { AuthenticatedUser } from '../dtos/authenticated-user.dto';
import { JwtValidator } from '../../shared/services/jwt-validator.service';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserGetController {
  constructor(private finder: UserFinder) {}

  @Get(':id')
  @ApiOkResponse()
  async run(@AuthUser() authUser: AuthenticatedUser, @Param('id') id: string, @Res() res: Response) {
    JwtValidator.verifyUserAuth(id, authUser);

    const user = await this.finder.run({ id });

    res.status(HttpStatus.OK).send(user);
  }
}
