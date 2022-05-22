import { Module } from '@nestjs/common';
import { MongooseMessageRepository } from './persistence/mongoose-message.repository';
import { MessageSender } from './services/message-sender.service';
import { MessagePostController } from './controllers/message-post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Messages, MessagesSchema } from './persistence/mongoose-message.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Messages.name, schema: MessagesSchema }])],
  controllers: [MessagePostController],
  providers: [
    MessageSender,
    {
      provide: 'MessageRepository',
      useClass: MongooseMessageRepository,
    },
  ],
})
export class MessagesModule {}
