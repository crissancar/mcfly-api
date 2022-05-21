import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExists extends HttpException {
  constructor(email: string) {
    super(`User with email '${email}' already exists`, HttpStatus.BAD_REQUEST);
  }
}
