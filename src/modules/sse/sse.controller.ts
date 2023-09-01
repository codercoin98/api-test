import { Controller, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';
@Controller('sse')
export class SseController {
  @Sse('stream')
  stream() {
    return new Observable((observer) => {
      observer.next({ data: { msg: 'start send message , waiting....' } });
      setInterval(() => {
        observer.next({ data: { msg: `this is a message` } });
      }, 2000);
    });
  }
}
