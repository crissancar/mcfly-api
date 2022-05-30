import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from '../modules/users/users.module';
import { MongooseConfigModule } from '../config/persistence/mongoose-config.module';
import { AuthModule } from '../modules/auth/auth.module';
import { ActivatedUsersModule } from '../modules/activated-users/activated-users.module';
import { MessagesModule } from '../modules/messages/messages.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserIsActivatedMiddleware } from '../modules/activated-users/middlewares/user-is-activated.middleware';
import { NotificationsModule } from '../modules/notifications/notifications.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ActivatedUsersModule,
    MessagesModule,
    NotificationsModule,
    MongooseConfigModule,
    EventEmitterModule.forRoot(),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserIsActivatedMiddleware).forRoutes('messages/:senderId/:receiverId');
  }
}
