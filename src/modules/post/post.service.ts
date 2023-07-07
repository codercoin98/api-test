import { Injectable } from '@nestjs/common';
import { BaseType } from 'src/types/response';

@Injectable()
export class PostService {
  getTestContext(): Record<string, BaseType> {
    return {
      name: 'codercoin',
      age: 24,
    };
  }
}
