import { HttpException, HttpStatus } from '@nestjs/common';

export class UserWithIdNotExists extends HttpException {
  constructor(id: string) {
    super(`User with id '${id}' not exists`, HttpStatus.NOT_FOUND);
  }
}
