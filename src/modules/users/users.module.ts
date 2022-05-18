import { Module } from '@nestjs/common';
import { UserPutController } from './controllers/user-put.controller';
import { UserCreator } from './services/user-creator.service';

@Module({
  controllers: [UserPutController],
  providers: [UserCreator],
})
export class UsersModule {}
