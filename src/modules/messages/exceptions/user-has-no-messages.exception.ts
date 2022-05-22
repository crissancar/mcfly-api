import { HttpException, HttpStatus } from '@nestjs/common';

export class UserHasNoMessages extends HttpException {
  constructor(id: string) {
    super(`User with id ${id} has no messages`, HttpStatus.NO_CONTENT);
  }
}
