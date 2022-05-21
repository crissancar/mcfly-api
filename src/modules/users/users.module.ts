import { Module } from '@nestjs/common';
import { UserPutController } from './controllers/user-put.controller';
import { Users, UserSchema } from './persistence/mongoose-user.model';
import { UserCreator } from './services/user-creator.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseUserRepository } from './persistence/mongoose-user.repository';
import { UserGetController } from './controllers/user-get.controller';
import { UserFinder } from './services/user-finder.service';
import { UserEmailFinder } from './services/user-email-finder.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }])],
  controllers: [UserPutController, UserGetController],
  providers: [
    UserCreator,
    UserFinder,
    UserEmailFinder,
    {
      provide: 'UserRepository',
      useClass: MongooseUserRepository,
    },
  ],
  exports: [UserCreator, UserFinder, UserEmailFinder],
})
export class UsersModule {}
