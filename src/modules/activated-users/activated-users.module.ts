import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivatedUsers, ActivatedUsersSchema } from './persistence/activated-users-mongoose.model';
import { ActivatedUsersPostController } from './controllers/activated-users-post.controller';
import { UserActivator } from './services/user-activator.service';
import { MongooseActivatedUsersRepository } from './persistence/mongoose-activated-users.repository';
import { ActivatedUsersDeleteController } from './controllers/activated-users-delete.controller';
import { UserDeactivator } from './services/user-deactivator.service';
import { ActivatedUsersGetController } from './controllers/activated-users-get.controller';
import { ActivatedUsersGetter } from './services/activated-users-getter.service';
import { ActivatedUserGetController } from './controllers/activated-user-get.controller';
import { ActivatedUserFinder } from './services/activated-user-finder.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: ActivatedUsers.name, schema: ActivatedUsersSchema }])],
  controllers: [
    ActivatedUsersPostController,
    ActivatedUsersDeleteController,
    ActivatedUsersGetController,
    ActivatedUserGetController,
  ],
  providers: [
    UserActivator,
    UserDeactivator,
    ActivatedUsersGetter,
    ActivatedUserFinder,
    {
      provide: 'ActivatedUsersRepository',
      useClass: MongooseActivatedUsersRepository,
    },
  ],
  exports: [ActivatedUserFinder],
})
export class ActivatedUsersModule {}
