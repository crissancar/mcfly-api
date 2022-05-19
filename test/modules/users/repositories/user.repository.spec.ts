import { getConnectionToken, getModelToken, MongooseModule } from '@nestjs/mongoose';
import { NestApplication } from '@nestjs/core';
import { UserRepository } from 'src/modules/users/repositories/user.repository';
import { Connection, Model } from 'mongoose';
import { Users } from '../../../../src/modules/users/persistence/mongoose-user.model';
import { AppModule } from '../../../../src/app/app.module';
import { Test } from '@nestjs/testing';
import { MongooseUserRepository } from '../../../../src/modules/users/persistence/mongoose-user.repository';
import { UserMother } from '../mothers/user.mother';

let app: NestApplication;
let mongooseUserSchema: Model<Users>;
let repository: UserRepository;

beforeEach(async () => {
  const module = await Test.createTestingModule({
    imports: [AppModule],
    providers: [
      {
        provide: getModelToken(Users.name),
        useValue: Users,
      },
    ],
  }).compile();

  app = module.createNestApplication<NestApplication>();
  await app.listen(3000);

  mongooseUserSchema = module.get<Model<Users>>(getModelToken(Users.name));
  repository = new MongooseUserRepository(mongooseUserSchema);
});

afterEach(async () => {
  // await (app.get(getConnectionToken()) as Connection).db.dropDatabase();
  await app.close();
});

describe('UserRepository', () => {
  describe('#save', () => {
    it('should save a user', async () => {
      const user = UserMother.random();

      await repository.save(user);
    });
  });
});
