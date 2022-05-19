import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserFinder } from '../services/user-finder.service';
import { UserNotExists } from '../exceptions/user-not-exists.exception';

@ApiTags('users')
@Controller('users')
export class UserGetController {
  constructor(private finder: UserFinder) {}

  @Get(':id')
  @ApiOkResponse()
  async run(@Param('id') id: string, @Res() res: Response) {
    try {
      const user = await this.finder.run(id);

      res.status(HttpStatus.OK).send(user);
    } catch (error) {
      if (error instanceof UserNotExists) {
        res.status(HttpStatus.NOT_FOUND).send();
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
      }
    }
  }
}
