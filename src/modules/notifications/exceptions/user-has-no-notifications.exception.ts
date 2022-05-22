import { HttpException, HttpStatus } from '@nestjs/common';

export class UserHasNoNotifications extends HttpException {
  constructor() {
    super(`User has no notifications`, HttpStatus.NO_CONTENT);
  }
}
