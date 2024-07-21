import { Get, Injectable, Version, VERSION_NEUTRAL } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @Get()
  @Version([VERSION_NEUTRAL, '1'])
  findAll() {
    return 'i am old one';
  }

  @Get()
  @Version('2')
  findAll2() {
    return 'i am new one';
  }
}
