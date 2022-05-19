export class FindUserResponse {
  readonly id: string;
  readonly username: string;
  readonly email: string;

  constructor(id: string, username: string, email: string) {
    this.id = id;
    this.username = username;
    this.email = email;
  }
}
