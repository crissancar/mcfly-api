import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ActivatedUserFinder } from '../services/activated-user-finder.service';

@Injectable()
export class UserIsActivatedMiddleware implements NestMiddleware {
  constructor(private finder: ActivatedUserFinder) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.receiverId;

    await this.finder.run({ id });

    next();
  }
}
