import { Module } from '@nestjs/common';
import { UsersModule } from '../modules/users/users.module';
import { MongooseConfigModule } from '../config/persistence/mongoose-config.module';

@Module({
  imports: [UsersModule, MongooseConfigModule],
})
export class AppModule {}
