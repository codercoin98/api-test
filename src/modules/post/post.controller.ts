import { Controller, Post, Req } from '@nestjs/common';
import { ResponseData } from 'src/types/response';
import { Request } from 'express';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post()
  getPostContext(@Req() request: Request): ResponseData {
    const conext = this.postService.getTestContext();
    return {
      code: 200,
      url: request.url,
      data: {
        ...conext,
        ...request.body,
      },
    };
  }
}
