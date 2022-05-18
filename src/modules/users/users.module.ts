import { Module } from '@nestjs/common';
import { UserPutController } from './controllers/user-put.controller';
import { InMemoryUserRepository } from './repositories/in-memory-user.repository';
import { UserCreator } from './services/user-creator.service';

@Module({
  controllers: [UserPutController],
  providers: [
    UserCreator,
    {
      provide: 'UserRepository',
      useClass: InMemoryUserRepository,
    },
  ],
})
export class UsersModule {}
