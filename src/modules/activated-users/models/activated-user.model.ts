export class ActivatedUser {
  readonly id;

  constructor(id) {
    this.id = id;
  }

  static create(id: string) {
    return new ActivatedUser(id);
  }
}
