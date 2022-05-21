import { Module } from '@nestjs/common';
import { UsersModule } from '../modules/users/users.module';
import { MongooseConfigModule } from '../config/persistence/mongoose-config.module';
import { AuthModule } from '../modules/auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule, MongooseConfigModule],
})
export class AppModule {}
