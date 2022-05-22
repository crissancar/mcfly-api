import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Param, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Response } from 'express';
import { ActivatedUserFinder } from '../services/activated-user-finder.service';

@ApiTags('activated-users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('activated-users')
export class ActivatedUserGetController {
  constructor(private finder: ActivatedUserFinder) {}

  @Get(':id')
  async run(@Param('id') id: string, @Res() res: Response) {
    try {
      await this.finder.run({ id });

      res.status(HttpStatus.OK).send();
    } catch (error) {
      res.status(error.getStatus()).send();
    }

    res.status(HttpStatus.OK).send();
  }
}
