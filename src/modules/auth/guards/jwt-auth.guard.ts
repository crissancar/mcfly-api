import { HttpException, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(error: any, user: any) {
    if (error) {
      throw new HttpException(error.message, error.status);
    }

    return error ? error : user;
  }
}
