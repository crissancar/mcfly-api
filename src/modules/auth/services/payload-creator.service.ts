import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticatedUser } from '../../users/dtos/authenticated-user.dto';
import { JwtPayload } from '../types/jwt-payload.type';

@Injectable()
export class PayloadCreator {
  constructor(private jwt: JwtService) {}

  run(user: AuthenticatedUser) {
    const payload: JwtPayload = {
      sub: user.id,
    };

    return this.jwt.sign(payload);
  }
}
