import { AuthenticatedUser } from '../../users/dtos/authenticated-user.dto';
import { UnauthorizedException } from '@nestjs/common';

export class JwtValidator {
  static verifyUserAuth(id: string, authUser: AuthenticatedUser) {
    if (id != authUser.id) {
      throw new UnauthorizedException();
    }
  }
}
