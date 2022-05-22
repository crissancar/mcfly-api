import { Module } from '@nestjs/common';
import { MongooseMessageRepository } from './persistence/mongoose-message.repository';
import { MessageSender } from './services/message-sender.service';
import { MessagePostController } from './controllers/message-post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Messages, MessagesSchema } from './persistence/mongoose-message.model';
import { MessageGetController } from './controllers/message-get.controller';
import { MessageFinder } from './services/message-finder.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Messages.name, schema: MessagesSchema }])],
  controllers: [MessagePostController, MessageGetController],
  providers: [
    MessageSender,
    MessageFinder,
    {
      provide: 'MessageRepository',
      useClass: MongooseMessageRepository,
    },
  ],
})
export class MessagesModule {}
