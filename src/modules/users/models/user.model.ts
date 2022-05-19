import * as bcrypt from 'bcrypt';

export class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;

  constructor(id: string, username: string, email: string, password: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static create(id: string, username: string, email: string, password: string): User {
    return new User(id, username, email, this.hashPassword(password));
  }

  static fromPlainData(plainData: { id: string; username: string; email: string; password: string }): User {
    return new User(plainData.id, plainData.username, plainData.email, plainData.password);
  }

  static hashPassword(password: string) {
    const saltOrRounds = 10;

    return bcrypt.hashSync(password, saltOrRounds);
  }
}
