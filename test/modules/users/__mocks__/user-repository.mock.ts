import { UserRepository } from '../../../../src/modules/users/repositories/user.repository';
import { User } from '../../../../src/modules/users/models/user.model';
import { Nullable } from '../../../../src/modules/shared/types/Nullable';

export class UserRepositoryMock implements UserRepository {
  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  private mockSave = jest.fn();
  private mockSearch = jest.fn();
  private foundUser: Nullable<User> = null;

  async save(user: User): Promise<void> {
    this.mockSave(user);
  }

  async findById(id: string): Promise<Nullable<User>> {
    this.mockSearch();
    return this.foundUser;
  }

  returnOnSearch(user: User) {
    this.foundUser = user;
  }

  assertSearch() {
    expect(this.mockSearch).toHaveBeenCalled();
  }

  assertLastSavedUserIs(expected: User): void {
    const mock = this.mockSave.mock;
    const lastSavedUser = mock.calls[mock.calls.length - 1][0] as User;

    expect(lastSavedUser).toBeInstanceOf(User);
    expect(lastSavedUser.id).toEqual(expected.id);
  }
}
