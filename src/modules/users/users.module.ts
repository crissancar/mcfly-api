import { Module } from '@nestjs/common';
import { UserPutController } from './controllers/user-put.controller';
import { Users, UserSchema } from './persistence/mongoose-user.model';
import { UserCreator } from './services/user-creator.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseUserRepository } from './persistence/mongoose-user.repository';
import { UserGetController } from './controllers/user-get.controller';
import { UserFinder } from './services/user-finder.service';

@Module({
  controllers: [UserPutController, UserGetController],
  providers: [
    UserCreator,
    UserFinder,
    {
      provide: 'UserRepository',
      useClass: MongooseUserRepository,
    },
  ],
  imports: [MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }])],
})
export class UsersModule {}
