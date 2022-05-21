import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { Authenticator } from './services/authenticator.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PayloadCreator } from './services/payload-creator.service';
import { AuthAccountPostController } from './controllers/auth-account-post.controller';
import { AuthLoginPostController } from './controllers/auth-login-post.controller';
import { JwtConfig } from '../../config/jwt/jwt-config';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register(JwtConfig.build())],
  controllers: [AuthAccountPostController, AuthLoginPostController],
  providers: [Authenticator, LocalStrategy, JwtStrategy, PayloadCreator],
})
export class AuthModule {}
