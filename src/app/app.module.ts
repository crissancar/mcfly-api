import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../modules/users/users.module';
import { MongooseConfigModule } from '../config/persistence/mongoose-config.module';

@Module({
  imports: [UsersModule, MongooseConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
