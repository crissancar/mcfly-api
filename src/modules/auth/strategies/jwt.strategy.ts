import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import 'dotenv-flow/config';
import { UserFinder } from '../../users/services/user-finder.service';
import { JwtPayload } from '../types/jwt-payload.type';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private finder: UserFinder) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate(jwtPayload: JwtPayload) {
    const id = jwtPayload.sub;

    const user = await this.finder.run(id);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
