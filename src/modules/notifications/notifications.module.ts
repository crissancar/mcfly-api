import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Notifications, NotificationsSchema } from './persistence/mongose-notification.model';
import { NotificationSender } from './services/notification-sender.service';
import { MongooseNotificationRepository } from './persistence/mongoose-notification.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Notifications.name, schema: NotificationsSchema }])],
  providers: [
    NotificationSender,
    {
      provide: 'NotificationRepository',
      useClass: MongooseNotificationRepository,
    },
  ],
})
export class NotificationsModule {}
