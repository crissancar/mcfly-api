import { Module } from '@nestjs/common';
import { UsersModule } from '../modules/users/users.module';
import { MongooseConfigModule } from '../config/persistence/mongoose-config.module';
import { AuthModule } from '../modules/auth/auth.module';
import { ActivatedUsersModule } from '../modules/activated-users/activated-users.module';
import { MessagesModule } from '../modules/messages/messages.module';
import { NotificationsModule } from 'src/modules/notifications/notifications.module';

@Module({
  imports: [UsersModule, AuthModule, ActivatedUsersModule, MessagesModule, NotificationsModule, MongooseConfigModule],
})
export class AppModule {}
