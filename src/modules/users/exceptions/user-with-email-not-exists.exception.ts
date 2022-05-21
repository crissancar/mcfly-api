import { HttpException, HttpStatus } from '@nestjs/common';

export class UserWithEmailNotExists extends HttpException {
  constructor(email: string) {
    super(`User with email '${email}' not exists`, HttpStatus.NOT_FOUND);
  }
}
