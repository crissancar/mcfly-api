import { CreateUserRequestMother } from '../dtos/create-user-request-mother.dto';
import { UserMother } from '../mothers/user.mother';
import { UserCreator } from '../../../../src/modules/users/services/user-creator.service';

import { UserRepositoryMock } from '../__mocks__/user-repository.mock';

let creator: UserCreator;
let repository: UserRepositoryMock;

beforeEach(async () => {
  repository = new UserRepositoryMock();
  creator = new UserCreator(repository);
});

describe('UserCreator', () => {
  it('should create a valid user', async () => {
    const request = CreateUserRequestMother.random();

    const user = UserMother.fromRequest(request);

    await creator.run(request);

    repository.assertLastSavedUserIs(user);
  });
});
