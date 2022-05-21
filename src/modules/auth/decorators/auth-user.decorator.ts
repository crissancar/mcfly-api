import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthenticatedUser } from '../../users/dtos/authenticated-user.dto';
import { FindUserToLoginResponse } from '../../users/dtos/find-user-to-login-response.dto';

export const AuthUser = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();

  const user: FindUserToLoginResponse = request.user;

  if (!user) {
    throw new BadRequestException();
  }

  return new AuthenticatedUser(user.id);
});
