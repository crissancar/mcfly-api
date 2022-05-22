import { HttpException, HttpStatus } from '@nestjs/common';

export class UserIsNotActivated extends HttpException {
  constructor() {
    super('User is not activated', HttpStatus.BAD_REQUEST);
  }
}
