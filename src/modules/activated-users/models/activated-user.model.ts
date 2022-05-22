export class ActivatedUser {
  readonly id;

  constructor(id) {
    this.id = id;
  }

  static create(id: string) {
    return new ActivatedUser(id);
  }

  static fromPlainDataArray(plainDataArray): Array<ActivatedUser> {
    const activatedUsers: Array<ActivatedUser> = [];

    plainDataArray.map((item) => {
      const id: string = item._id;

      activatedUsers.push(new ActivatedUser(id));
    });

    return activatedUsers;
  }
}
