import { UserRepositoryMock } from '../__mocks__/user-repository.mock';
import { UserMother } from '../mothers/user.mother';
import { UserEmailFinder } from '../../../../src/modules/users/services/user-email-finder.service';
import { FindUserToLoginResponseMother } from '../dtos/find-user-to-login-response.mother.dto';

let finder: UserEmailFinder;
let repository: UserRepositoryMock;

beforeEach(async () => {
  repository = new UserRepositoryMock();
  finder = new UserEmailFinder(repository);
});

describe('UserEmailFinder', () => {
  it('should find an existing user email', async () => {
    const user = UserMother.random();
    repository.returnOnSearch(user);

    await repository.findByEmail(user.email);
    repository.assertSearch();

    const response = await finder.run({ email: user.email });

    const expected = FindUserToLoginResponseMother.create(user);
    expect(expected).toEqual(response);
  });
});
