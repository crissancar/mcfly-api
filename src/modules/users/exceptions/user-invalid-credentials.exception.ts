import { HttpException, HttpStatus } from '@nestjs/common';

export class UserInvalidCredentials extends HttpException {
  constructor() {
    super('Invalid user credentials', HttpStatus.UNAUTHORIZED);
  }
}
