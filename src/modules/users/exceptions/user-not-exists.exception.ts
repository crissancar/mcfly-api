export class UserNotExists extends Error {
  constructor(id: string) {
    super(`User with id '${id}' not exists`);
  }
}
