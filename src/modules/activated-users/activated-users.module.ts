import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivatedUsers, ActivatedUsersSchema } from './persistence/activated-users-mongoose.model';
import { ActivateUserPostController } from './controllers/activate-user-post.controller';
import { UserActivator } from './services/user-activator.service';
import { MongooseActivatedUsersRepository } from './persistence/mongoose-activated-users.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: ActivatedUsers.name, schema: ActivatedUsersSchema }])],
  controllers: [ActivateUserPostController],
  providers: [
    UserActivator,
    {
      provide: 'ActivatedUsersRepository',
      useClass: MongooseActivatedUsersRepository,
    },
  ],
})
export class ActivatedUsersModule {}
