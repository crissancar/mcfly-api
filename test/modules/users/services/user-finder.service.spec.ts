import { UserFinder } from '../../../../src/modules/users/services/user-finder.service';
import { UserRepositoryMock } from '../__mocks__/user-repository.mock';
import { UserMother } from '../mothers/user.mother';
import { FindUserResponseMother } from '../dtos/find-user-response-mother.dto';

let finder: UserFinder;
let repository: UserRepositoryMock;

beforeEach(async () => {
  repository = new UserRepositoryMock();
  finder = new UserFinder(repository);
});

describe('UserFinder', () => {
  it('should find an existing user', async () => {
    const user = UserMother.random();
    repository.returnOnSearch(user);

    await repository.search(user.id);
    repository.assertSearch();

    const response = await finder.run(user.id);

    const expected = FindUserResponseMother.create(user);
    expect(expected).toEqual(response);
  });
});
