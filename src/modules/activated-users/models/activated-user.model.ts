export class ActivatedUser {
  readonly id: string;

  constructor(id) {
    this.id = id;
  }

  static create(id: string) {
    return new ActivatedUser(id);
  }

  static fromPlainData(plainData: { id: string }): ActivatedUser {
    return new ActivatedUser(plainData.id);
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
