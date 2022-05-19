import { UserRepository } from '../../../../src/modules/users/repositories/user.repository';
import { User } from '../../../../src/modules/users/models/user.model';

export class UserRepositoryMock implements UserRepository {
  private mockSave = jest.fn();

  async save(user: User): Promise<void> {
    this.mockSave(user);
  }

  assertLastSavedUserIs(expected: User): void {
    const mock = this.mockSave.mock;
    const lastSavedUser = mock.calls[mock.calls.length - 1][0] as User;

    expect(lastSavedUser).toBeInstanceOf(User);
    expect(lastSavedUser.id).toEqual(expected.id);
  }
}
