import { Controller, Get, Req } from '@nestjs/common';
import { ResponseData } from 'src/types/response';
import { GetService } from './get.service';
import { Request } from 'express';

@Controller('get')
export class GetController {
  constructor(private readonly getService: GetService) {}

  @Get()
  getTestContext(@Req() request: Request): ResponseData {
    const context = this.getService.getTestContext();
    return {
      code: 200,
      url: request.url,
      data: context,
    };
  }
}
