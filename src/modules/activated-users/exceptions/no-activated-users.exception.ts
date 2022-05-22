import { HttpException, HttpStatus } from '@nestjs/common';

export class NoActivatedUsers extends HttpException {
  constructor() {
    super(`There are no activated users`, HttpStatus.NOT_FOUND);
  }
}
