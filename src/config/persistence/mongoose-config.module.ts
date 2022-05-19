import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import 'dotenv-flow/config';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL)],
  providers: [],
})
export class MongooseConfigModule {}
