import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Notifications, NotificationsSchema } from './persistence/mongose-notification.model';
import { NotificationSender } from './services/notification-sender.service';
import { MongooseNotificationRepository } from './persistence/mongoose-notification.repository';
import { NotificationFinder } from './services/notification-finder.service';
import { NotificationGetController } from './controller/notification-get.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Notifications.name, schema: NotificationsSchema }])],
  controllers: [NotificationGetController],
  providers: [
    NotificationSender,
    NotificationFinder,
    {
      provide: 'NotificationRepository',
      useClass: MongooseNotificationRepository,
    },
  ],
})
export class NotificationsModule {}
