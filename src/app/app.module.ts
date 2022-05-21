import { Module } from '@nestjs/common';
import { UsersModule } from '../modules/users/users.module';
import { MongooseConfigModule } from '../config/persistence/mongoose-config.module';
import { AuthModule } from '../modules/auth/auth.module';
import { ActivatedUsersModule } from '../modules/activated-users/activated-users.module';

@Module({
  imports: [UsersModule, AuthModule, ActivatedUsersModule, MongooseConfigModule],
})
export class AppModule {}
