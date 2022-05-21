import { Body, Controller, HttpStatus, Param, Put, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserRequest } from '../dtos/create-user-request.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserCreator } from '../services/user-creator.service';
import { UserEmailFinder } from '../services/user-email-finder.service';
import { AuthUser } from '../../auth/decorators/auth-user.decorator';
import { AuthenticatedUser } from '../dtos/authenticated-user.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { JwtValidator } from '../../shared/services/jwt-validator.service';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserPutController {
  constructor(private finder: UserEmailFinder, private creator: UserCreator) {}

  @Put(':id')
  @ApiCreatedResponse()
  async run(
    @AuthUser() authUser: AuthenticatedUser,
    @Param('id') id: string,
    @Body() req: CreateUserRequest,
    @Res() res: Response,
  ) {
    try {
      JwtValidator.verifyUserAuth(id, authUser);

      await this.creator.run({ id, ...req });
    } catch (error) {
      res.status(error.getStatus()).send();
    }

    res.status(HttpStatus.CREATED).send();
  }
}
