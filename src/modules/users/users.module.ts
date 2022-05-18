import { Module } from '@nestjs/common';
import { UserPutController } from './controllers/user-put.controller';

@Module({
  controllers: [UserPutController],
  providers: [],
})
export class UsersModule {}
